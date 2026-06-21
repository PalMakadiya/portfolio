import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt';

export interface AuthenticatedRequest extends Request {
  user?: {
    id: number;
    username: string;
  };
}

export const authenticateJWT = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1]; // Bearer <token>
    const decoded = verifyToken(token);

    if (decoded) {
      req.user = decoded;
      return next();
    }
  }

  return res.status(401).json({ error: 'Unauthorized access. Valid token required.' });
};
