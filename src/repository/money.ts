import { PrismaClient } from '@prisma/client';
import { PostMoneyType } from '../interface/money/postMoney';

const prisma = new PrismaClient();

export class MoneyRepository {
  public createMoneyPost = async ({ userId, moneyInfo }: { userId: number; moneyInfo: PostMoneyType }) => {
    try {
      await prisma.money.create({
        data: {
          title: moneyInfo.title,
          description: moneyInfo.content,
          amount: moneyInfo.cost,
          type: moneyInfo.type,
          auto: moneyInfo.auto,
          regularWeek: moneyInfo.regularWeek,
          createAt: new Date(),
          userId: userId,
        },
      });
    } catch (error: unknown) {
      console.error('Failed to create money entry:', error);
      throw new Error('Failed to create money entry');
    }
  };

  public getMoneyPostList = async (userId: number) => {
    try {
      const moneyPost = await prisma.money.findMany({
        where: {
          userId: userId,
        },
        select: {
          id: true,
          amount: true,
          type: true,
          title: true,
          description: true,
          auto: true,
          regularWeek: true,
        },
      });

      return moneyPost;
    } catch (err: unknown) {
      console.error(err);
      throw new Error('Failed to get money entry');
    }
  };

  public findMoneyPost = async (moneyId: number, userId: number) => {
    try {
      const moneyPost = await prisma.money.findUnique({
        where: {
          id: moneyId,
        },
      });

      return moneyPost;
    } catch (err: unknown) {
      console.error(err);
      throw new Error('Failed to find money entry');
    }
  };

  public updateMoneyPost = async ({ moneyId, moneyInfo }: { moneyId: number; moneyInfo: PostMoneyType }) => {
    try {
      await prisma.money.update({
        where: {
          id: moneyId,
        },
        data: {
          title: moneyInfo.title,
          description: moneyInfo.content,
          amount: moneyInfo.cost,
          type: moneyInfo.type,
          auto: moneyInfo.auto,
          regularWeek: moneyInfo.regularWeek,
        },
      });
    } catch (err: unknown) {
      console.error(err);
      throw new Error('Failed to update money entry');
    }
  };
}
