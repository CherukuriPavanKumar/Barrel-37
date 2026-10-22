/// <reference types="node" />
// Vercel serverless function: notifies the restaurant about a new booking
// by email (Resend) and SMS (SMSAPI.pl). Provider keys stay server-side.

const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || 'joinusbarrel37@gmail.com';
const NOTIFY_PHONE = process.env.NOTIFY_PHONE || '48500458966';
const RESEND_FROM = process.env.RESEND_FROM || 'Barrel 37 Bookings <onboarding@resend.dev>';

interface Booking {
  fullName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  specialRequests?: string;
  confirmationCode?: string;
}

const isShortString = (v: unknown, max: number) => typeof v === 'string' && v.trim().length > 0 && v.length <= max;

function parseBooking(body: any): Booking | null {
  if (!body || typeof body !== 'object') return null;
  const { fullName, email, phone, date, time, guests, specialRequests, confirmationCode } = body;
  if (!isShortString(fullName, 100)) return null;
  if (!isShortString(email, 200) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null;
  if (!isShortString(phone, 30)) return null;
  if (typeof date !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(date)) return null;
  if (typeof time !== 'string' || !/^\d{2}:\d{2}$/.test(time)) return null;
  if (!Number.isInteger(guests) || guests < 1 || guests > 12) return null;
  if (specialRequests !== undefined && specialRequests !== '' && !isShortString(specialRequests, 1000)) return null;
  if (confirmationCode !== undefined && !isShortString(confirmationCode, 20)) return null;
  return { fullName, email, phone, date, time, guests, specialRequests, confirmationCode };
}

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));

async function sendEmail(b: Booking): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error('RESEND_API_KEY is not set');

  const rows: [string, string][] = [
    ['Code', b.confirmationCode || '-'],
    ['Name', b.fullName],
    ['Date', b.date],
    ['Time', b.time],
    ['Guests', String(b.guests)],
    ['Phone', b.phone],
    ['Email', b.email],
    ['Special requests', b.specialRequests || '-'],
  ];
  const html = `<h2>New table booking</h2><table cellpadding="6">${rows
    .map(([k, v]) => `<tr><td><b>${k}</b></td><td>${escapeHtml(v)}</td></tr>`)
    .join('')}</table>`;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: RESEND_FROM,
      to: [NOTIFY_EMAIL],
      reply_to: b.email,
      subject: `New booking: ${b.fullName}, ${b.date} ${b.time}, ${b.guests} guest(s)`,
      html,
    }),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
}

async function sendSms(b: Booking): Promise<void> {
  const token = process.env.SMSAPI_TOKEN;
  if (!token) throw new Error('SMSAPI_TOKEN is not set');

  const message = `Barrel 37 - nowa rezerwacja: ${b.fullName}, ${b.date} ${b.time}, ${b.guests} os., tel. ${b.phone}`
    + (b.confirmationCode ? `, kod ${b.confirmationCode}` : '');

  const params = new URLSearchParams({ to: NOTIFY_PHONE, message, format: 'json', encoding: 'utf-8' });
  // Sender name must be registered in the SMSAPI panel; without it the account default is used
  if (process.env.SMSAPI_FROM) params.set('from', process.env.SMSAPI_FROM);

  const res = await fetch('https://api.smsapi.pl/sms.do', {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params,
  });
  const data: any = await res.json().catch(() => null);
  // SMSAPI can return HTTP 200 with an error payload
  if (!res.ok || !data || data.error) throw new Error(`SMSAPI ${res.status}: ${JSON.stringify(data)}`);
}

export async function POST(request: Request): Promise<Response> {
  const booking = parseBooking(await request.json().catch(() => null));
  if (!booking) return Response.json({ ok: false, error: 'Invalid booking' }, { status: 400 });

  const [email, sms] = await Promise.allSettled([sendEmail(booking), sendSms(booking)]);
  if (email.status === 'rejected') console.error('Booking email failed:', email.reason);
  if (sms.status === 'rejected') console.error('Booking SMS failed:', sms.reason);

  const result = { email: email.status === 'fulfilled', sms: sms.status === 'fulfilled' };
  const ok = result.email || result.sms;
  return Response.json({ ok, ...result }, { status: ok ? 200 : 502 });
}
