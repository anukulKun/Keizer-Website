//@ts-nocheck
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  const { name, company, goal, date, email, details, privacyPolicy } = await req.json();
  const Iemail = "keizerworks@gmail.com"

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  })

  try {
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
        Additional Details: ${details}
        Privacy Policy Agreement: ${privacyPolicy ? 'Agreed' : 'Not Agreed'}
      `,
    })

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Error sending email', error }, { status: 500 })
  }
}
