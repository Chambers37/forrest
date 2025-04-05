import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { firstName, lastName, city, email, phone, serviceType, message } = body;

    const response = await resend.emails.send({
      from: 'quotes@forresthardscape.com',
      to: 'chambers3737@gmail.com',
      subject: 'New Quote Request',
      text: `
        Name: ${firstName} ${lastName}
        City: ${city}
        Email: ${email}
        Phone: ${phone}
        Service Type: ${serviceType}

        Message: ${message}
      `
    })

    console.log("Email sent:", response);

    return Response.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json(
      { message: "Error sending email.", error: error.toString() },
      { status: 500 }
    );
  }
}
