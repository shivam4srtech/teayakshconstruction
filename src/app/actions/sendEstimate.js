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

function validateEstimateForm(formData) {
  const values = {
    name: sanitizeText(formData.name),
    email: sanitizeText(formData.email),
    phone: sanitizeText(formData.phone),
    city: sanitizeText(formData.city),
    packageSlug: sanitizeText(formData.packageSlug),
    packageName: sanitizeText(formData.packageName),
    builtUpArea: sanitizeText(formData.builtUpArea),
    floors: sanitizeText(formData.floors),
    parking: sanitizeText(formData.parking),
    pricePerSqft: sanitizeText(formData.pricePerSqft),
    estimatedCost: sanitizeText(formData.estimatedCost),
  };

  const fieldErrors = {};

  Object.entries({
    name: values.name,
    email: values.email,
    phone: values.phone,
    city: values.city,
    packageSlug: values.packageSlug,
    builtUpArea: values.builtUpArea,
    floors: values.floors,
    parking: values.parking,
  }).forEach(([key, value]) => {
    if (!value) fieldErrors[key] = REQUIRED_MESSAGE;
  });

  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    fieldErrors.email = "Enter a valid email address.";
  }

  if (values.phone && !/^[0-9+\-\s()]{7,20}$/.test(values.phone)) {
    fieldErrors.phone = "Enter a valid mobile number.";
  }

  const area = Number(values.builtUpArea);
  const floors = Number(values.floors);

  if (values.builtUpArea && (!Number.isFinite(area) || area <= 0)) {
    fieldErrors.builtUpArea = "Enter a built-up area greater than 0.";
  }

  if (values.floors && (!Number.isInteger(floors) || floors <= 0)) {
    fieldErrors.floors = "Enter a valid number of floors.";
  }

  return { values, fieldErrors };
}

export async function sendEstimateRequest(formData) {
  const { values, fieldErrors } = validateEstimateForm(formData);

  if (Object.keys(fieldErrors).length > 0) {
    return {
      ok: false,
      fieldErrors,
      message: "Please fix the highlighted fields.",
    };
  }

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT || 587),
    secure: Number(process.env.MAIL_PORT) === 465,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  const packageLabel = values.packageName || values.packageSlug;

  try {
    await transporter.sendMail({
      from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_ADDRESS}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New construction estimate request - ${values.city}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 680px; color: #2D2926; border: 1px solid #eee; padding: 24px;">
          <h2 style="margin: 0 0 16px; color: #A67153;">Cost Estimator Lead</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tbody>
              <tr><td style="padding: 8px 0;"><strong>Name:</strong></td><td>${escapeHtml(values.name)}</td></tr>
              <tr><td style="padding: 8px 0;"><strong>Email:</strong></td><td>${escapeHtml(values.email)}</td></tr>
              <tr><td style="padding: 8px 0;"><strong>Phone:</strong></td><td>${escapeHtml(values.phone)}</td></tr>
              <tr><td style="padding: 8px 0;"><strong>City:</strong></td><td>${escapeHtml(values.city)}</td></tr>
              <tr><td style="padding: 8px 0;"><strong>Package:</strong></td><td>${escapeHtml(packageLabel)}</td></tr>
              <tr><td style="padding: 8px 0;"><strong>Built-up Area:</strong></td><td>${escapeHtml(values.builtUpArea)} sq.ft</td></tr>
              <tr><td style="padding: 8px 0;"><strong>Floors:</strong></td><td>${escapeHtml(values.floors)}</td></tr>
              <tr><td style="padding: 8px 0;"><strong>Stilt Parking:</strong></td><td>${escapeHtml(values.parking)}</td></tr>
              <tr><td style="padding: 8px 0;"><strong>Rate:</strong></td><td>${escapeHtml(values.pricePerSqft)} / sq.ft</td></tr>
              <tr><td style="padding: 8px 0;"><strong>Estimated Value:</strong></td><td>${escapeHtml(values.estimatedCost)}</td></tr>
            </tbody>
          </table>
        </div>
      `,
    });

    return {
      ok: true,
      fieldErrors: {},
      message: "Estimate sent successfully. Our team will contact you shortly.",
    };
  } catch (error) {
    console.error("Estimate Mail Error:", error);
    return {
      ok: false,
      fieldErrors: {},
      message: "We could not send the estimate right now. Please try again.",
    };
  }
}
