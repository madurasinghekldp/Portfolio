import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/EmailTemplate';
import { render } from '@react-email/render';

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.TO_EMAIL;
const fromEmail = "My-Portfolio <onboarding@resend.dev>";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, subject, message } = body; 

    const html = await render(<EmailTemplate message={message} email={email}/>);


    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail as string],
      subject,
      html,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.toString() }, { status: 500 });
    }

    // fallback if error is not an instance of Error
    return NextResponse.json({ error: 'Unknown error' }, { status: 500 });
  }
}
