// app/api/contact/route.js or /api/contact/route.js (Next.js 13/14+)
// import { Resend } from "resend";

// const resend = new Resend(""); //process.env.NEXT_PUBLIC_RESEND_API

export async function POST(req) {
//   console.log("innn");
  // try {
  //   const { fromEmail, name, number, message } = await req.json();

  //   const emailResponse = await resend.emails.send({
  //     from: fromEmail,
  //     to: "thesarus.2022@gmail.com",
  //     subject: "New Contact Message",
  //     html: `
  //       <p><strong>Name:</strong> ${name}</p>
  //       <p><strong>Email:</strong> ${fromEmail}</p>
  //       <p><strong>Number:</strong> ${number}</p>
  //       <p><strong>Message:</strong><br/>${message}</p>
  //     `,
  //   });

  //   return Response.json({ success: true, data: emailResponse });
  // } catch (error) {
  //   return Response.json(
  //     { success: false, error: error.message },
  //     { status: 500 }
  //   );
  // }
}
