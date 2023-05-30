import { PrismaClient } from '@prisma/client';
import { PostMoneyType } from '../interface/money/postMoney';

const prisma = new PrismaClient();

export class MoneyRepository {
  public createMoneyPost = async ({ userId, moneyInfo }: { userId: number; moneyInfo: PostMoneyType }) => {
    try {
      await prisma.money.create({
        data: {
          name: moneyInfo.title,
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
      throw new Error('Failed to create money entry');
    }
  };
}
