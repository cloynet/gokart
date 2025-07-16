import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: "tüm alanları doldurunuz." }), {
      status: 400,
    });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
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

    return new Response(JSON.stringify({ succcess: true }), { status: 200 });
  } catch (error) {
    console.error("Mail gönderma hatası:", error);
    return new Response(JSON.stringify({ error: "Mail gönderilemedi." }), {
      status: 500,
    });
  }
}
