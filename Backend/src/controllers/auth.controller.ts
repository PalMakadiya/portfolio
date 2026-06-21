import { Request, Response, NextFunction } from 'express';
import { loginAdminService } from '../services/auth.service';

export const loginAdmin = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  try {
    const session = await loginAdminService(username, password);
    if (!session) {
      return res.status(401).json({ error: 'Invalid username or password credentials.' });
    }
    return res.json({ success: true, message: 'Logged in successfully.', ...session });
  } catch (error) {
    next(error);
  }
};
