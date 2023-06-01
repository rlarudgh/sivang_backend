import { Router } from 'express';
import { getMoney, getMoneyItem, modifyMoneyItem, postMoney } from './money.controller';

export const moneyRouter = Router();

moneyRouter.post('/post', postMoney);
moneyRouter.get('/get', getMoney);
moneyRouter.get('/get/:id', getMoneyItem);
moneyRouter.put('/put/:id', modifyMoneyItem);
