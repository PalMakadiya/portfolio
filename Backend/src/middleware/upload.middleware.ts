import { Request, Response, NextFunction } from 'express';

// Mock file upload middleware that matches the interface
export const uploadSingleImage = (fieldName: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    // Simply proceed to next controller since we do not actually require upload in development,
    // or let it mock a file path if a file was provided.
    if (req.body && !req.body.imageUrl) {
      req.body.imageUrl = 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000';
    }
    next();
  };
};
