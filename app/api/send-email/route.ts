//@ts-nocheck
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const { name, company, goal, date, email, details, privacyPolicy } = await req.json();
    
    if (!name || !email || !privacyPolicy) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }
    
    const Iemail = "keizerworks@gmail.com"

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: Iemail,
      to: 'keizerworks@gmail.com',
      subject: 'New Inquiry from Form Submission',
      text: `
        Name: ${name}
        Company: ${company}
        Goal: ${goal}
        Date: ${date}
        Email: ${email}
        Additional Details: ${details || 'N/A'}
        Privacy Policy Agreement: ${privacyPolicy ? 'Agreed' : 'Not Agreed'}
      `,
    });

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email', error: error.message }, { status: 500 });
  }
}
