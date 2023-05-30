import { Router } from 'express';
import { postMoney } from './money.controller';

export const moneyRouter = Router();

moneyRouter.post('/post', postMoney);
