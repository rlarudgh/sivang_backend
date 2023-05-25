import { NextFunction, Request, Response } from 'express';
import { JWTHelper } from '../../../helper/jwt';
import { getAccessToken } from '../../../utils/jwt';
import { ProfileService } from '../../../service/profile';
import { JwtPayload } from 'jsonwebtoken';

export const getProfile = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const accessToken: string = getAccessToken(request.headers.authorization);
    const profileInstance: ProfileService = new ProfileService();
    const jwtHelper: JWTHelper = new JWTHelper();
    const decodeAccessToken = jwtHelper.decodeAccessToken(accessToken);
    const { userId }: JwtPayload = decodeAccessToken as JwtPayload;

    const profile = await profileInstance.getProfile(userId);

    if (profile) {
      response.status(200).json({ message: '프로필 조회 성공', profile });
    }
  } catch (error: unknown) {
    console.error('프로필 조회 실패', error);
    next(error);
  }
};
