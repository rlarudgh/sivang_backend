import { Router } from 'express';
import { authRouter } from './routes/auth';
import { profileRouter } from './routes/profile';

export const apiRouter = Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/mypage', profileRouter);
