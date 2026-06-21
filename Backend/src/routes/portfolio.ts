import { Router } from 'express';
import {
  getProjects,
  getSkills,
  getExperiences,
  createContactMessage
} from '../controllers/portfolioController';

const router = Router();

router.get('/projects', getProjects);
router.get('/skills', getSkills);
router.get('/experience', getExperiences);
router.post('/contact', createContactMessage);

export default router;
