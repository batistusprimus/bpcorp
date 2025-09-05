import { NextResponse } from 'next/server';

type Payload = {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  message: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<Payload>;
  if (!body || !body.name || !body.email || !body.message) {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }
  // Log only for development/placeholder purposes
  // eslint-disable-next-line no-console
  console.log('CONTACT_FORM', {
    name: body.name,
    company: body.company ?? '',
    email: body.email,
    phone: body.phone ?? '',
    message: body.message
  });
  return NextResponse.json({ status: 'accepted' }, { status: 202 });
}


