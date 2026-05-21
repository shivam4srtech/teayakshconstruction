"use server";

import nodemailer from "nodemailer";

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

function adminTemplate(email) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 620px; color: #2D2926; border: 1px solid #eee; padding: 24px; background: #fff;">
      <p style="margin: 0 0 8px; color: #A67153; font-size: 11px; font-weight: 800; letter-spacing: 0.24em; text-transform: uppercase;">Newsletter Signup</p>
      <h2 style="margin: 0 0 18px; font-size: 26px;">New subscriber</h2>
      <p style="margin: 0; font-size: 15px;"><strong>Email:</strong> ${escapeHtml(email)}</p>
    </div>
  `;
}

function subscriberTemplate(email) {
  return `
    <div style="margin: 0; padding: 0; background: #F8F5F2; font-family: Arial, sans-serif; color: #2D2926;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background: #F8F5F2; padding: 28px 12px;">
        <tr>
          <td align="center">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 640px; background: #ffffff; border-radius: 28px; overflow: hidden; box-shadow: 0 24px 70px rgba(45,41,38,0.12);">
              <tr>
                <td style="background: #2D2926; padding: 34px 28px;">
                  <p style="margin: 0 0 10px; color: #A67153; font-size: 11px; font-weight: 800; letter-spacing: 0.28em; text-transform: uppercase;">Trayaksh Newsletter</p>
                  <h1 style="margin: 0; color: #ffffff; font-size: 32px; line-height: 1.15; font-weight: 600;">Thank you for subscribing.</h1>
                </td>
              </tr>
              <tr>
                <td style="padding: 34px 28px;">
                  <p style="margin: 0 0 20px; color: #5f5b57; font-size: 15px; line-height: 1.8;">
                    You are now subscribed to the Trayaksh newsletter. We will send you thoughtful updates on construction insights, design ideas, project stories, and practical planning notes.
                  </p>
                  <div style="border: 1px solid #EFE9E4; background: #FBF8F5; border-radius: 18px; padding: 18px; margin: 24px 0;">
                    <p style="margin: 0 0 8px; color: #A67153; font-size: 11px; font-weight: 800; letter-spacing: 0.22em; text-transform: uppercase;">Subscribed Email</p>
                    <p style="margin: 0; font-size: 14px;">${escapeHtml(email)}</p>
                  </div>
                  <p style="margin: 0; color: #77716b; font-size: 13px; line-height: 1.7;">
                    Thanks for joining us. We are glad to have you here.
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

export async function subscribeNewsletter(formData) {
  const email = sanitizeText(formData.email);

  if (!email) {
    return {
      ok: false,
      fieldErrors: { email: "Email address is required." },
      message: "Please enter your email address.",
    };
  }

  if (!isValidEmail(email)) {
    return {
      ok: false,
      fieldErrors: { email: "Enter a valid email address." },
      message: "Please enter a valid email address.",
    };
  }

  try {
    const transporter = createTransporter();

    await transporter.sendMail({
      from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_ADDRESS}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "New newsletter subscriber",
      html: adminTemplate(email),
    });

    await transporter.sendMail({
      from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_ADDRESS}>`,
      to: email,
      subject: "Thanks for subscribing to Trayaksh",
      html: subscriberTemplate(email),
    });

    return {
      ok: true,
      fieldErrors: {},
      message: "Thank you for subscribing to our newsletter.",
    };
  } catch (error) {
    console.error("Newsletter Mail Error:", error);

    return {
      ok: false,
      fieldErrors: {},
      message: "We could not subscribe you right now. Please try again.",
    };
  }
}
