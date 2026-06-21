import { Router } from 'express';
import { getProjects, createProject, updateProject, deleteProject } from '../controllers/project.controller';
import { validateProject } from '../validators/project.validator';
import { authenticateJWT } from '../middleware/auth.middleware';
import { uploadSingleImage } from '../middleware/upload.middleware';

const router = Router();

router.get('/', getProjects);
router.post('/', authenticateJWT, uploadSingleImage('image'), validateProject, createProject);
router.put('/:id', authenticateJWT, uploadSingleImage('image'), validateProject, updateProject);
router.delete('/:id', authenticateJWT, deleteProject);

export default router;
