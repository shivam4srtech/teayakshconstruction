"use server";

import nodemailer from "nodemailer";

const REQUIRED_MESSAGE = "This field is required.";

function sanitizeText(value) {
  return String(value || "").trim();
}

function escapeHtml(value) {
  return sanitizeText(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatCurrency(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

function calculateEmi(principal, annualRate, tenureYears) {
  const monthlyRate = annualRate / 12 / 100;
  const numberOfMonths = tenureYears * 12;

  if (monthlyRate === 0) {
    const monthlyEmi = Math.round(principal / numberOfMonths);
    return {
      monthlyEmi,
      totalInterest: 0,
      totalPayment: principal,
    };
  }

  const ratePower = Math.pow(1 + monthlyRate, numberOfMonths);
  const monthlyEmi = Math.round((principal * monthlyRate * ratePower) / (ratePower - 1));
  const totalPayment = Math.round(monthlyEmi * numberOfMonths);

  return {
    monthlyEmi,
    totalInterest: Math.max(0, totalPayment - principal),
    totalPayment,
  };
}

function validateLoanCalculatorLead(formData) {
  const values = {
    name: sanitizeText(formData.name),
    phone: sanitizeText(formData.phone),
    loanAmount: sanitizeText(formData.loanAmount),
    interestRate: sanitizeText(formData.interestRate),
    loanTenure: sanitizeText(formData.loanTenure),
  };
  const fieldErrors = {};

  Object.entries(values).forEach(([key, value]) => {
    if (!value) fieldErrors[key] = REQUIRED_MESSAGE;
  });

  if (values.phone && !/^[0-9+\-\s()]{7,20}$/.test(values.phone)) {
    fieldErrors.phone = "Enter a valid phone number.";
  }

  const loanAmount = Number(values.loanAmount);
  const interestRate = Number(values.interestRate);
  const loanTenure = Number(values.loanTenure);

  if (values.loanAmount && (!Number.isFinite(loanAmount) || loanAmount < 100000 || loanAmount > 500000000)) {
    fieldErrors.loanAmount = "Enter an amount between INR 1 lakh and INR 50 crore.";
  }

  if (values.interestRate && (!Number.isFinite(interestRate) || interestRate < 5 || interestRate > 30)) {
    fieldErrors.interestRate = "Interest rate must be between 5% and 30%.";
  }

  if (values.loanTenure && (!Number.isInteger(loanTenure) || loanTenure < 5 || loanTenure > 30)) {
    fieldErrors.loanTenure = "Loan tenure must be between 5 and 30 years.";
  }

  return {
    values,
    numericValues: { loanAmount, interestRate, loanTenure },
    fieldErrors,
  };
}

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT || 587),
    secure: Number(process.env.MAIL_PORT) === 465,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  });
}

function adminEmailTemplate(values, calculation) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 680px; color: #2D2926; border: 1px solid #eee; padding: 24px; background: #ffffff;">
      <p style="margin: 0 0 8px; color: #A67153; font-size: 11px; font-weight: 800; letter-spacing: 0.24em; text-transform: uppercase;">Home Loan EMI Calculator Lead</p>
      <h2 style="margin: 0 0 20px; font-size: 28px; line-height: 1.2;">${escapeHtml(values.name)} requested home loan EMI details</h2>
      <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
        <tbody>
          <tr><td style="padding: 10px 0; color: #777;"><strong>Name</strong></td><td style="padding: 10px 0;">${escapeHtml(values.name)}</td></tr>
          <tr><td style="padding: 10px 0; color: #777;"><strong>Phone</strong></td><td style="padding: 10px 0;">${escapeHtml(values.phone)}</td></tr>
          <tr><td style="padding: 10px 0; color: #777;"><strong>Loan Amount</strong></td><td style="padding: 10px 0;">${escapeHtml(formatCurrency(Number(values.loanAmount)))}</td></tr>
          <tr><td style="padding: 10px 0; color: #777;"><strong>Interest Rate</strong></td><td style="padding: 10px 0;">${escapeHtml(values.interestRate)}% p.a.</td></tr>
          <tr><td style="padding: 10px 0; color: #777;"><strong>Loan Tenure</strong></td><td style="padding: 10px 0;">${escapeHtml(values.loanTenure)} years</td></tr>
          <tr><td style="padding: 10px 0; color: #777;"><strong>Monthly EMI</strong></td><td style="padding: 10px 0;">${escapeHtml(formatCurrency(calculation.monthlyEmi))}</td></tr>
          <tr><td style="padding: 10px 0; color: #777;"><strong>Total Interest</strong></td><td style="padding: 10px 0;">${escapeHtml(formatCurrency(calculation.totalInterest))}</td></tr>
          <tr><td style="padding: 10px 0; color: #777;"><strong>Total Payment</strong></td><td style="padding: 10px 0;">${escapeHtml(formatCurrency(calculation.totalPayment))}</td></tr>
        </tbody>
      </table>
    </div>
  `;
}

export async function sendLoanCalculatorLead(formData) {
  const { values, numericValues, fieldErrors } = validateLoanCalculatorLead(formData);

  if (Object.keys(fieldErrors).length > 0) {
    return {
      ok: false,
      fieldErrors,
      message: "Please fix the highlighted fields.",
    };
  }

  const calculation = calculateEmi(
    numericValues.loanAmount,
    numericValues.interestRate,
    numericValues.loanTenure
  );

  try {
    const transporter = createTransporter();

    await transporter.sendMail({
      from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_ADDRESS}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New home loan EMI lead - ${values.name}`,
      html: adminEmailTemplate(values, calculation),
    });

    return {
      ok: true,
      fieldErrors: {},
      message: "Thank you for using our Home Loan EMI calculator.",
      calculation,
    };
  } catch (error) {
    console.error("Loan Calculator Mail Error:", error);

    return {
      ok: false,
      fieldErrors: {},
      message: "We could not submit your details right now. Please try again.",
    };
  }
}
