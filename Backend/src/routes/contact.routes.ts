import { Router } from 'express';
import { submitContactMessage } from '../controllers/contact.controller';
import { validateContact } from '../validators/contact.validator';

const router = Router();

router.post('/', validateContact, submitContactMessage);

export default router;
