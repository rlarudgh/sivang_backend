import { MoneyRepository } from '../repository/money';
import { ProfileRepository } from '../repository/profile';
import { PostMoneyType } from '../interface/money/postMoney';

export class MoneyService {
  private moneyRepository: MoneyRepository;
  private profileRepository: ProfileRepository;

  constructor() {
    this.moneyRepository = new MoneyRepository();
    this.profileRepository = new ProfileRepository();
  }

  public createMoneyPost = async ({ userId, moneyInfo }: { userId: number; moneyInfo: PostMoneyType }) => {
    try {
      const userProfile = await this.profileRepository.findByUserId(userId);

      await this.moneyRepository.createMoneyPost({
        userId,
        moneyInfo,
      });
    } catch (error: unknown) {
      console.error('가계부 작성 실패', error);
      throw new Error('가계부 작성 실패');
    }
  };
}
