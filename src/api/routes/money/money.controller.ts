import { NextFunction, Request, Response } from 'express';
import { error } from '../../../constants/error';
import { JWTHelper } from '../../../helper/jwt';
import { getAccessToken } from '../../../utils/jwt';
import { JwtPayload } from 'jsonwebtoken';
import { MoneyService } from '../../../service/money';

export const postMoney = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const moneyInfo = request.body;
    const jwtHelper: JWTHelper = new JWTHelper();
    const accessToken: string = getAccessToken(request.headers.authorization);
    const decodeAccessToken = jwtHelper.decodeAccessToken(accessToken);
    const { userId }: JwtPayload = decodeAccessToken as JwtPayload;
    const moneyInstance: MoneyService = new MoneyService();

    await moneyInstance.createMoneyPost({ userId, moneyInfo });

    response.status(201).json({ message: '가계부 작성 성공' });
  } catch (err: unknown) {
    console.error('가계부 작성 실패', err);
    response.status(500).json(error.userError.serverError);
    next(err);
  }
};
