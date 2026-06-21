import { Router } from 'express';
import { loginAdmin } from '../controllers/auth.controller';
import { validateLogin } from '../validators/auth.validator';

const router = Router();

router.post('/login', validateLogin, loginAdmin);

export default router;
