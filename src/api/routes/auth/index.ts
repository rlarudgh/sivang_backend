import { Router } from 'express';
import { createUser, login } from './auth.controller';

export const authRouter = Router();

authRouter.post('/signUp', createUser);
authRouter.post('/login', login);
