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

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateConsultationLead(formData) {
  const values = {
    name: sanitizeText(formData.name),
    city: sanitizeText(formData.city),
    phone: sanitizeText(formData.phone),
    email: sanitizeText(formData.email),
    projectType: sanitizeText(formData.projectType || formData.project_type),
    requireProjectType: Boolean(formData.requireProjectType),
    source: sanitizeText(formData.source) || "Website Consultation",
  };
  const fieldErrors = {};

  if (!values.name) fieldErrors.name = REQUIRED_MESSAGE;
  if (!values.city) fieldErrors.city = REQUIRED_MESSAGE;
  if (!values.phone) fieldErrors.phone = REQUIRED_MESSAGE;
  if (values.requireProjectType && !values.projectType) {
    fieldErrors.projectType = REQUIRED_MESSAGE;
  }

  if (values.phone && !/^[0-9+\-\s()]{7,20}$/.test(values.phone)) {
    fieldErrors.phone = "Enter a valid phone number.";
  }

  if (values.email && !isValidEmail(values.email)) {
    fieldErrors.email = "Enter a valid email address.";
  }

  return { values, fieldErrors };
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

function adminEmailTemplate(values) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 680px; color: #2D2926; border: 1px solid #eee; padding: 24px; background: #ffffff;">
      <p style="margin: 0 0 8px; color: #A67153; font-size: 11px; font-weight: 800; letter-spacing: 0.24em; text-transform: uppercase;">New Consultation Lead</p>
      <h2 style="margin: 0 0 20px; font-size: 28px; line-height: 1.2;">${escapeHtml(values.name)} requested a callback</h2>
      <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
        <tbody>
          <tr><td style="padding: 10px 0; color: #777;"><strong>Name</strong></td><td style="padding: 10px 0;">${escapeHtml(values.name)}</td></tr>
          <tr><td style="padding: 10px 0; color: #777;"><strong>City</strong></td><td style="padding: 10px 0;">${escapeHtml(values.city)}</td></tr>
          <tr><td style="padding: 10px 0; color: #777;"><strong>Phone</strong></td><td style="padding: 10px 0;">${escapeHtml(values.phone)}</td></tr>
          <tr><td style="padding: 10px 0; color: #777;"><strong>Email</strong></td><td style="padding: 10px 0;">${escapeHtml(values.email || "Not provided")}</td></tr>
          ${values.projectType ? `<tr><td style="padding: 10px 0; color: #777;"><strong>Project Type</strong></td><td style="padding: 10px 0;">${escapeHtml(values.projectType)}</td></tr>` : ""}
          <tr><td style="padding: 10px 0; color: #777;"><strong>Source</strong></td><td style="padding: 10px 0;">${escapeHtml(values.source)}</td></tr>
        </tbody>
      </table>
    </div>
  `;
}

function userConfirmationTemplate(values) {
  return `
    <div style="margin: 0; padding: 0; background: #F8F5F2; font-family: Arial, sans-serif; color: #2D2926;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background: #F8F5F2; padding: 28px 12px;">
        <tr>
          <td align="center">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 640px; background: #ffffff; border-radius: 28px; overflow: hidden; box-shadow: 0 24px 70px rgba(45,41,38,0.12);">
              <tr>
                <td style="background: #2D2926; padding: 34px 28px;">
                  <p style="margin: 0 0 10px; color: #A67153; font-size: 11px; font-weight: 800; letter-spacing: 0.28em; text-transform: uppercase;">Trayaksh Consultation</p>
                  <h1 style="margin: 0; color: #ffffff; font-size: 32px; line-height: 1.15; font-weight: 600;">Your request is in good hands.</h1>
                </td>
              </tr>
              <tr>
                <td style="padding: 34px 28px;">
                  <p style="margin: 0 0 18px; font-size: 18px; line-height: 1.7;">Hello ${escapeHtml(values.name)},</p>
                  <p style="margin: 0 0 22px; color: #5f5b57; font-size: 15px; line-height: 1.8;">
                    Thank you for reaching out to Trayaksh. We have received your consultation request for <strong>${escapeHtml(values.city)}</strong>. Our team will review your details and contact you shortly.
                  </p>
                  <div style="border: 1px solid #EFE9E4; background: #FBF8F5; border-radius: 18px; padding: 18px; margin: 24px 0;">
                    <p style="margin: 0 0 10px; color: #A67153; font-size: 11px; font-weight: 800; letter-spacing: 0.22em; text-transform: uppercase;">Request Summary</p>
                    <p style="margin: 8px 0; font-size: 14px;"><strong>Phone:</strong> ${escapeHtml(values.phone)}</p>
                    <p style="margin: 8px 0; font-size: 14px;"><strong>City:</strong> ${escapeHtml(values.city)}</p>
                    ${values.projectType ? `<p style="margin: 8px 0; font-size: 14px;"><strong>Project Type:</strong> ${escapeHtml(values.projectType)}</p>` : ""}
                  </div>
                  <p style="margin: 0; color: #77716b; font-size: 13px; line-height: 1.7;">
                    You do not need to reply to this email. This is a confirmation copy for your records.
                  </p>
                </td>
              </tr>
              <tr>
                <td style="padding: 20px 28px; background: #F8F5F2; color: #8B8179; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase;">
                  Trayaksh Constructions & Interiors
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  `;
}

export async function sendConsultationLead(formData) {
  const { values, fieldErrors } = validateConsultationLead(formData);

  if (Object.keys(fieldErrors).length > 0) {
    return {
      ok: false,
      fieldErrors,
      message: "Please fix the highlighted fields.",
    };
  }

  try {
    const transporter = createTransporter();

    await transporter.sendMail({
      from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_ADDRESS}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New consultation request - ${values.name}`,
      html: adminEmailTemplate(values),
    });

    if (values.email) {
      await transporter.sendMail({
        from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_ADDRESS}>`,
        to: values.email,
        subject: "We received your Trayaksh consultation request",
        html: userConfirmationTemplate(values),
      });
    }

    return {
      ok: true,
      fieldErrors: {},
      message: "Request sent. Our consultant will contact you shortly.",
    };
  } catch (error) {
    console.error("Consultation Mail Error:", error);

    return {
      ok: false,
      fieldErrors: {},
      message: "We could not submit your request right now. Please try again.",
    };
  }
}
