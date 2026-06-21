import { Router } from 'express';
import { getSkills, getExperiences } from '../controllers/skill.controller';

const router = Router();

router.get('/', getSkills);
router.get('/experience', getExperiences);

export default router;
