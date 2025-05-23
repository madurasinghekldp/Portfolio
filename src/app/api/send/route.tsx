import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/EmailTemplate';
import { render } from '@react-email/render';

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.TO_EMAIL;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, subject, message } = body;

    const html = await render(<EmailTemplate subject={subject} message={message} />);


    const { data, error } = await resend.emails.send({
      from: email,
      to: [toEmail as string],
      subject,
      html,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Unknown error' }, { status: 500 });
  }
}
