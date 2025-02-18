import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { firstName, lastName, city, email, phone, serviceType, message } = body;

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER,
      subject: "New Quote Request",
      text: `
        Name: ${firstName} ${lastName}
        City: ${city}
        Email: ${email}
        Phone: ${phone}
        Service Type: ${serviceType}

        Message: ${message}
      `,
    };

    let info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);

    return Response.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json(
      { message: "Error sending email.", error: error.toString() },
      { status: 500 }
    );
  }
}
