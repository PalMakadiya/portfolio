import { Request, Response, NextFunction } from 'express';
import prisma from '../config/prisma';

export const getSkills = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const skills = await prisma.skill.findMany({
      orderBy: [
        { category: 'asc' },
        { order: 'asc' }
      ]
    });
    
    // Group skills by category for frontend convenience
    const grouped = skills.reduce((acc: Record<string, typeof skills>, skill) => {
      const { category } = skill;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(skill);
      return acc;
    }, {});

    res.json(grouped);
  } catch (error) {
    next(error);
  }
};

// Also serving experience data within this controller/route scope
export const getExperiences = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const experiences = await prisma.experience.findMany({
      orderBy: [
        { order: 'asc' },
        { createdAt: 'desc' }
      ]
    });
    res.json(experiences);
  } catch (error) {
    next(error);
  }
};
