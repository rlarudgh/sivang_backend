import { MoneyRepository } from '../repository/money';
import { PostMoneyType } from '../interface/money/postMoney';
import { ErrorResponse } from '../utils/error-response';
import { error } from '../constants/error';
import { UpdateMoneyPostType } from '../interface/money/updateMoney';

export class MoneyService {
  private moneyRepository: MoneyRepository;

  constructor() {
    this.moneyRepository = new MoneyRepository();
  }

  public createMoneyPost = async ({ userId, moneyInfo }: { userId: number; moneyInfo: PostMoneyType }) => {
    try {
      await this.moneyRepository.createMoneyPost({
        userId,
        moneyInfo,
      });
    } catch (error: unknown) {
      console.error('가계부 작성 실패', error);
      throw new Error('Failed to create money entry');
    }
  };

  public getMoneyPostList = async (userId: number) => {
    try {
      const moneyPostList = await this.moneyRepository.getMoneyPostList(userId);
      return moneyPostList;
    } catch (error: unknown) {
      console.error(error);
      throw new Error('가계부 조회 실패');
    }
  };

  public findMoneyPost = async (moneyId: number, userId: number) => {
    try {
      const moneyPost = await this.moneyRepository.findMoneyPost(moneyId, userId);

      if (!moneyPost) {
        throw new ErrorResponse(error.userError.notFound);
      }

      return moneyPost;
    } catch (err: unknown) {
      console.error(err);
      throw new Error('가계부 아이템 조회 실패');
    }
  };

  public updateMoneyPost = async({ userId, moneyId, moneyInfo }: UpdateMoneyPostType) => {
    try{
      const moneyPost = await this.moneyRepository.findMoneyPost(moneyId, userId);

      if(!moneyPost){
        throw new ErrorResponse(error.userError.notFound);
      }

      await this.moneyRepository.updateMoneyPost({ moneyId, moneyInfo });
    }catch(err: unknown){
      console.error(err);
    }
  }
}
