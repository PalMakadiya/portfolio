import { Request, Response, NextFunction } from 'express';
import { saveContactMessageService } from '../services/contact.service';

export const submitContactMessage = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, subject, message } = req.body;
  try {
    const data = await saveContactMessageService(name, email, subject, message);
    res.status(201).json({ success: true, message: 'Message sent successfully!', data });
  } catch (error) {
    next(error);
  }
};
