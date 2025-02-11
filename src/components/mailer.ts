// src/mailer.ts
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { generateEmailTemplate, EmailTemplateParams } from "./emailTemp";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 465,
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error("Nodemailer transporter configuration error:", error);
  } else {
    console.log("Nodemailer transporter is ready to send messages");
  }
});

export const sendEmail = async (to: string, subject: string, templateParams: EmailTemplateParams) => {
  const html = generateEmailTemplate(templateParams);
  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject,
      html,
    });
    console.log("Email sent: ", info.messageId);
    return info;
  } catch (error) {
    console.error("Error sending email: ", error);
    throw error;
  }
};
