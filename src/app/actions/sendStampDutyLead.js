"use server";

import nodemailer from "nodemailer";
import { STAMP_DUTY_RATES, calculateStampDuty } from "@/lib/stampDutyCalculator";

const REQUIRED_MESSAGE = "This field is required.";
const VALID_STATE_NAMES = STAMP_DUTY_RATES.map((state) => state.name);

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

function formatPercent(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "percent",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value);
}

function validateStampDutyLead(formData) {
  const values = {
    name: sanitizeText(formData.name),
    phone: sanitizeText(formData.phone),
    state: sanitizeText(formData.state),
    propertyValue: sanitizeText(formData.propertyValue),
  };
  const fieldErrors = {};

  Object.entries(values).forEach(([key, value]) => {
    if (!value) fieldErrors[key] = REQUIRED_MESSAGE;
  });

  if (values.phone && !/^[0-9+\-\s()]{7,20}$/.test(values.phone)) {
    fieldErrors.phone = "Enter a valid phone number.";
  }

  if (values.state && !VALID_STATE_NAMES.includes(values.state)) {
    fieldErrors.state = "Select a valid state or union territory.";
  }

  const propertyValue = Number(values.propertyValue);

  if (values.propertyValue && (!Number.isFinite(propertyValue) || propertyValue < 100000 || propertyValue > 500000000)) {
    fieldErrors.propertyValue = "Enter a property value between INR 1 lakh and INR 50 crore.";
  }

  return {
    values,
    numericValues: { propertyValue },
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
    <div style="font-family: Arial, sans-serif; max-width: 720px; color: #2D2926; border: 1px solid #eee; padding: 24px; background: #ffffff;">
      <p style="margin: 0 0 8px; color: #A67153; font-size: 11px; font-weight: 800; letter-spacing: 0.24em; text-transform: uppercase;">Stamp Duty Calculator Lead</p>
      <h2 style="margin: 0 0 20px; font-size: 28px; line-height: 1.2;">${escapeHtml(values.name)} requested stamp duty details</h2>
      <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
        <tbody>
          <tr><td style="padding: 10px 0; color: #777;"><strong>Name</strong></td><td style="padding: 10px 0;">${escapeHtml(values.name)}</td></tr>
          <tr><td style="padding: 10px 0; color: #777;"><strong>Phone</strong></td><td style="padding: 10px 0;">${escapeHtml(values.phone)}</td></tr>
          <tr><td style="padding: 10px 0; color: #777;"><strong>State / UT</strong></td><td style="padding: 10px 0;">${escapeHtml(values.state)}</td></tr>
          <tr><td style="padding: 10px 0; color: #777;"><strong>Property Value</strong></td><td style="padding: 10px 0;">${escapeHtml(formatCurrency(calculation.propertyValue))}</td></tr>
          <tr><td style="padding: 10px 0; color: #777;"><strong>Stamp Duty</strong></td><td style="padding: 10px 0;">${escapeHtml(formatCurrency(calculation.stampDuty))} (${escapeHtml(calculation.stampDutyLabel)}; applied ${escapeHtml(formatPercent(calculation.stampDutyRate))})</td></tr>
          <tr><td style="padding: 10px 0; color: #777;"><strong>Registration Fee</strong></td><td style="padding: 10px 0;">${escapeHtml(formatCurrency(calculation.registrationFee))} (${escapeHtml(calculation.registrationLabel)})</td></tr>
          <tr><td style="padding: 10px 0; color: #777;"><strong>Total Government Fees</strong></td><td style="padding: 10px 0;">${escapeHtml(formatCurrency(calculation.totalFees))}</td></tr>
          <tr><td style="padding: 10px 0; color: #777;"><strong>Total Asset Outlay</strong></td><td style="padding: 10px 0;">${escapeHtml(formatCurrency(calculation.totalOutlay))}</td></tr>
          ${calculation.note ? `<tr><td style="padding: 10px 0; color: #777;"><strong>Rate Note</strong></td><td style="padding: 10px 0;">${escapeHtml(calculation.note)}</td></tr>` : ""}
        </tbody>
      </table>
    </div>
  `;
}

export async function sendStampDutyLead(formData) {
  const { values, numericValues, fieldErrors } = validateStampDutyLead(formData);

  if (Object.keys(fieldErrors).length > 0) {
    return {
      ok: false,
      fieldErrors,
      message: "Please fix the highlighted fields.",
    };
  }

  const calculation = calculateStampDuty(numericValues.propertyValue, values.state);

  if (!calculation) {
    return {
      ok: false,
      fieldErrors: { state: "Select a valid state or union territory." },
      message: "Please fix the highlighted fields.",
    };
  }

  try {
    const transporter = createTransporter();

    await transporter.sendMail({
      from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_ADDRESS}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New stamp duty calculator lead - ${values.state}`,
      html: adminEmailTemplate(values, calculation),
    });

    return {
      ok: true,
      fieldErrors: {},
      message: "Your stamp duty estimate is ready.",
      calculation,
    };
  } catch (error) {
    console.error("Stamp Duty Mail Error:", error);

    return {
      ok: false,
      fieldErrors: {},
      message: "We could not submit your details right now. Please try again.",
    };
  }
}
