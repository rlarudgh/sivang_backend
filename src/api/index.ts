import { Router } from 'express';
import { authRouter } from './routes/auth';
import { profileRouter } from './routes/profile';
import { moneyRouter } from './routes/money';

export const apiRouter = Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/mypage', profileRouter);
apiRouter.use('/money', moneyRouter);
