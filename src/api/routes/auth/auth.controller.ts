import { NextFunction, Request, Response } from 'express';
import { AuthService } from '../../../service/auth';
import { PostSignUpRequestType } from '../../../interface/user/signUp';
import { PostLoginRequestType } from '../../../interface/user/login';

export const createUser = async (
  request: Request<{}, {}, PostSignUpRequestType>,
  response: Response,
  next: NextFunction,
) => {
  try {
    const userInfo = request.body;
    const authInstance = new AuthService();

    await authInstance.signUp(userInfo);

    response.status(201).json({ message: '유저 생성 성공' });
  } catch (error: unknown) {
    console.error('회원가입 실패', error);
    response.status(500).json({ error: 'Failed to sign up' });
    next(error);
  }
};

export const login = async (request: Request<{}, {}, PostLoginRequestType>, response: Response, next: NextFunction) => {
  try {
    const { email, password }: PostLoginRequestType = request.body;
    const authInstance = new AuthService();
    const { access_token } = await authInstance.login(email, password);

    response.status(200).json({ message: '로그인 성공', access_token });
  } catch (error: unknown) {
    console.error('로그인 실패', error);
    response.status(500).json({ error: 'Failed to login' });
    next(error);
  }
};
