import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class ProfileRepository {
  public findByUserId = async (userId: number) => {
    const userRecord = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        email: true,
        name: true,
        createAt: true,
        moneys: true,
      },
    });
    return userRecord;
  };
}
