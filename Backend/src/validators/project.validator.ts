import { Request, Response, NextFunction } from 'express';

export const validateProject = (req: Request, res: Response, next: NextFunction) => {
  const { title, description, tags } = req.body;

  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description are required project fields.' });
  }

  if (tags && !Array.isArray(tags)) {
    return res.status(400).json({ error: 'Tags must be an array of strings.' });
  }

  next();
};
