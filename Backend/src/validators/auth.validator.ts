import { Request, Response, NextFunction } from 'express';

export const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required fields.' });
  }
  
  if (username.length < 3 || password.length < 6) {
    return res.status(400).json({ error: 'Invalid login request formatting.' });
  }

  next();
};
