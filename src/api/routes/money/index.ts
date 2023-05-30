import { Router } from 'express';
import { getMoney, postMoney } from './money.controller';

export const moneyRouter = Router();

moneyRouter.post('/post', postMoney);
moneyRouter.get('/get', getMoney);
