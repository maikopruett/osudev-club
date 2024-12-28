import Welcome from "../Emails/Welcome";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

(async function POST() {
  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['delivered@resend.dev'],
    subject: 'Hello World',
    react: Welcome(),
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
})();
