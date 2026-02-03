import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

const isValidEmail = (value: string) => /\S+@\S+\.\S+/.test(value);

const getEnv = (key: string) => {
  const value = process.env[key];
  return value && value.trim().length > 0 ? value : null;
};

export async function POST(request: Request) {
  let body: ContactPayload | null = null;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    body = null;
  }

  if (!body?.name || !body?.email || !body?.message) {
    return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
  }

  if (!isValidEmail(body.email)) {
    return NextResponse.json({ ok: false, error: "Invalid email address." }, { status: 400 });
  }

  if (body.message.trim().length < 10) {
    return NextResponse.json({ ok: false, error: "Message too short." }, { status: 400 });
  }

  const smtpHost = getEnv("SMTP_HOST");
  const smtpPort = Number(getEnv("SMTP_PORT") ?? "0");
  const smtpUser = getEnv("SMTP_USER");
  const smtpPass = getEnv("SMTP_PASS");
  const mailFrom = getEnv("MAIL_FROM");
  const mailTo = getEnv("MAIL_TO") ?? "yasminkhaled32003@gmail.com";

  console.log("Env vars:", { smtpHost, smtpPort, smtpUser, smtpPass: smtpPass ? "***" : null, mailFrom, mailTo });

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !mailFrom) {
    return NextResponse.json(
      { ok: false, error: "Email service not configured." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass
    }
  });

  try {
    await transporter.sendMail({
      from: mailFrom,
      to: mailTo,
      replyTo: body.email,
      subject: `New portfolio message from ${body.name}`,
      text: `Name: ${body.name}\nEmail: ${body.email}\n\n${body.message}`
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ ok: false, error: "Failed to send email." }, { status: 500 });
  }
}
