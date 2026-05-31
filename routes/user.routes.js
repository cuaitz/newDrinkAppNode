import express from 'express';
import requireAuth from '../middlewares/auth.js';
import {
    register,
    login,
    me
} from '../controllers/user.controller.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', requireAuth, me);

export default router;