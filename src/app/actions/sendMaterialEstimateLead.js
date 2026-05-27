"use server";

import nodemailer from "nodemailer";
import { CITIES_LIST, calculateMaterialEstimate } from "@/lib/materialEstimator";

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

function validateMaterialEstimateLead(formData) {
  const values = {
    name: sanitizeText(formData.name),
    phone: sanitizeText(formData.phone),
    city: sanitizeText(formData.city),
    slabArea: sanitizeText(formData.slabArea),
    floors: sanitizeText(formData.floors),
  };
  const fieldErrors = {};

  Object.entries(values).forEach(([key, value]) => {
    if (!value) fieldErrors[key] = REQUIRED_MESSAGE;
  });

  if (values.phone && !/^[0-9+\-\s()]{7,20}$/.test(values.phone)) {
    fieldErrors.phone = "Enter a valid phone number.";
  }

  if (values.city && !CITIES_LIST.includes(values.city)) {
    fieldErrors.city = "Select a valid city.";
  }

  const slabArea = Number(values.slabArea);
  const floors = Number(values.floors);

  if (values.slabArea && (!Number.isFinite(slabArea) || slabArea < 1 || slabArea > 100000)) {
    fieldErrors.slabArea = "Enter slab area between 1 and 100000 sq.ft.";
  }

  if (values.floors && (!Number.isInteger(floors) || floors < 1 || floors > 100)) {
    fieldErrors.floors = "Enter floors between 1 and 100.";
  }

  return {
    values,
    numericValues: { slabArea, floors },
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
      <p style="margin: 0 0 8px; color: #A67153; font-size: 11px; font-weight: 800; letter-spacing: 0.24em; text-transform: uppercase;">Building Material Estimator Lead</p>
      <h2 style="margin: 0 0 20px; font-size: 28px; line-height: 1.2;">${escapeHtml(values.name)} requested material quantities</h2>
      <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
        <tbody>
          <tr><td style="padding: 10px 0; color: #777;"><strong>Name</strong></td><td style="padding: 10px 0;">${escapeHtml(values.name)}</td></tr>
          <tr><td style="padding: 10px 0; color: #777;"><strong>Phone</strong></td><td style="padding: 10px 0;">${escapeHtml(values.phone)}</td></tr>
          <tr><td style="padding: 10px 0; color: #777;"><strong>City</strong></td><td style="padding: 10px 0;">${escapeHtml(values.city)}</td></tr>
          <tr><td style="padding: 10px 0; color: #777;"><strong>Slab Area</strong></td><td style="padding: 10px 0;">${escapeHtml(values.slabArea)} sq.ft</td></tr>
          <tr><td style="padding: 10px 0; color: #777;"><strong>Floors</strong></td><td style="padding: 10px 0;">${escapeHtml(values.floors)}</td></tr>
          <tr><td style="padding: 10px 0; color: #777;"><strong>Total Built-up Area</strong></td><td style="padding: 10px 0;">${escapeHtml(calculation.totalBuiltUpArea)} sq.ft</td></tr>
          <tr><td style="padding: 10px 0; color: #777;"><strong>Steel</strong></td><td style="padding: 10px 0;">${escapeHtml(calculation.steel)} kg</td></tr>
          <tr><td style="padding: 10px 0; color: #777;"><strong>Bricks</strong></td><td style="padding: 10px 0;">${escapeHtml(calculation.bricks)} pcs</td></tr>
        </tbody>
      </table>
    </div>
  `;
}

export async function sendMaterialEstimateLead(formData) {
  const { values, numericValues, fieldErrors } = validateMaterialEstimateLead(formData);

  if (Object.keys(fieldErrors).length > 0) {
    return {
      ok: false,
      fieldErrors,
      message: "Please fix the highlighted fields.",
    };
  }

  const calculation = calculateMaterialEstimate(numericValues.slabArea, numericValues.floors);

  try {
    const transporter = createTransporter();

    await transporter.sendMail({
      from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_ADDRESS}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New material estimate lead - ${values.city}`,
      html: adminEmailTemplate(values, calculation),
    });

    return {
      ok: true,
      fieldErrors: {},
      message: "Your material estimate is ready.",
      calculation,
    };
  } catch (error) {
    console.error("Material Estimate Mail Error:", error);

    return {
      ok: false,
      fieldErrors: {},
      message: "We could not submit your details right now. Please try again.",
    };
  }
}
