import { PrismaClient } from '@prisma/client';
import { PostSignUpRequestType } from '../interface/user/signUp';

const prismaClient = new PrismaClient();

export class userRepository{
  public createUser = async (userInfo: PostSignUpRequestType) => {
    await prismaClient.user.create({
      data: {
        name: userInfo.name,
        email: userInfo.email,
        password: userInfo.password,
      },
    });
  };
  public findByUserId = async (userId: string) => {
    const findUserRecord = await prismaClient.user.findFirst({
      where: { email: userId },
    });
    return findUserRecord;
  };
}
