import { Router } from 'express';
import { authRouter } from './routes/auth';

export const apiRouter = Router();

apiRouter.use('/auth', authRouter);
