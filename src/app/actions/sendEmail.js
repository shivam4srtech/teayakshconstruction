"use server";
import nodemailer from "nodemailer";

export async function sendConsultationRequest(formData) {
  // 1. Extract and Validate
  const { name, email, phone, service, budget, scope } = formData;
  
  if (!name || !email || !phone || !service) {
    return { error: "Required fields are missing. Please complete the form." };
  }

  // 2. Setup the "Postman" (Transporter)
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: parseInt(process.env.MAIL_PORT),
    secure: false, 
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  try {
    // 3. Send Email to you (The Admin)
    await transporter.sendMail({
      from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_ADDRESS}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `⚡ NEW LEAD: ${service} - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; border: 1px solid #eee; padding: 20px;">
          <h2 style="color: #c4a47c;">New Project Inquiry</h2>
          <hr/>
          <p><strong>Client Name:</strong> ${name}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Budget:</strong> ${budget}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong> ${scope || "N/A"}</p>
        </div>
      `,
    });

    // 4. Send "Thank You" Email to the Client
    await transporter.sendMail({
      from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_ADDRESS}>`,
      to: email,
      subject: `Thank you for contacting TRAYAKSH`,
      html: `
        <div style="font-family: 'Georgia', serif; text-align: center; padding: 40px; background-color: #fafafa;">
          <h1 style="color: #c4a47c;">TRAYAKSH</h1>
          <p style="font-size: 18px; color: #333;">Hello ${name},</p>
          <p style="color: #666; line-height: 1.6;">We have received your request for <strong>${service}</strong>.<br/> 
          Our architectural consultant will reach out to you shortly to discuss your vision.</p>
          <br/>
          <div style="border-top: 1px solid #ddd; padding-top: 20px; font-size: 12px; color: #999;">
            TRAYAKSH CONSTRUCTIONS & INTERIORS
          </div>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Mail Error:", error);
    return { error: "Something went wrong. Please try again later." };
  }
}