import prisma from '../config/prisma';
import { sendMail } from '../utils/sendMail';

export const saveContactMessageService = async (name: string, email: string, subject: string | undefined, message: string) => {
  const saved = await prisma.contactMessage.create({
    data: {
      name,
      email,
      subject: subject || null,
      message
    }
  });

  // Try sending email notification in background asynchronously
  sendMail(
    process.env.NOTIFICATION_EMAIL || 'admin@example.com',
    `Portfolio Contact: ${subject || 'New Message'}`,
    `You received a new contact message from ${name} (${email}):\n\n${message}`
  ).catch(err => console.error('Background mailer error:', err));

  return saved;
};
