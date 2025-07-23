import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();
  const { name, email, message, recaptchaToken } = body;

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: "tüm alanları doldurunuz." }), {
      status: 400,
    });
  }

  const recaptchaRes = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
    }
  );

  const recaptchaData = await recaptchaRes.json();

  if (!recaptchaData.success) {
    return new Response(JSON.stringify({ error: "reCAPTCHA başarısız" }), {
      status: 400,
    });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.SMTP_USER,
      subject: "Yeni İletişim Formu Mesajı",
      text: message,
      html: `
                <p><strong>Gönderen: </strong>${name} (${email})</p>
                <p><strong>Mesaj: ${message}</strong></p>
            `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Mail gönderma hatası:", error);
    return new Response(JSON.stringify({ error: "Mail gönderilemedi." }), {
      status: 500,
    });
  }
}
