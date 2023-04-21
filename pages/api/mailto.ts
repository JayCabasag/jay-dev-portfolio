import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer';

type Data = {
  message: string
}

type MailData = {
  name: string,
  email: string,
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_EMAIL_FROM,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  const { name, email, message }: MailData = req.body;

  try {
    await transporter.sendMail({
      from: process.env.MAIL_EMAIL_FROM,
      to: process.env.MAIL_EMAIL_TO,
      subject: `Message from ${name}`,
      html: `
        <html>
          <body>
            <h3>
              New Message from ${name} \n 
              Email: ${email}
            </h3>
            <p> <strong> Message : </strong> ${message}</p>
          </body>
        </html>
      `,
    });

    res.status(200).json({ message: 'Sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Unable to send message.' });
  }
}