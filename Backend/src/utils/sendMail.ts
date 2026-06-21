import { logger } from './logger';

export const sendMail = async (to: string, subject: string, body: string): Promise<boolean> => {
  try {
    logger.info(`Simulating mail to: ${to} | Subject: ${subject}`);
    // Mock successful email delivery
    return true;
  } catch (error) {
    logger.error('Failed to simulate sendMail', error);
    return false;
  }
};
