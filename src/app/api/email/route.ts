import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const data = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  // Email to yourself (admin)
  const adminMailOptions = {
    from: process.env.GMAIL_USER,
    to: "qureshihamza453@gmail.com", // Replace with your email
    subject: "New Application Submission",
    text: JSON.stringify(data, null, 2),
  };

  // Email to the user who submitted the form
  const userMailOptions = {
    from: process.env.GMAIL_USER,
    to: data.email, // User's email from the form data
    subject: "Thank you for your application!",
    text: `Dear ${data.fullName},\n\nThank you for submitting your application. We have received your details and will contact you soon.\n\nBest regards,\nVodafone Team`,
  };

  try {
    // Send both emails in parallel
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    return new Response("Emails sent successfully", { status: 200 });
  } catch (error) {
    console.error("Error sending emails:", error);
    return new Response("Error sending emails", { status: 500 });
  }
}
