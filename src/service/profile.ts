import { error } from '../constants/error';
import { ProfileRepository } from '../repository/profile';
import { ErrorResponse } from '../utils/error-response';

export class ProfileService {
  private profileRepository;

  constructor() {
    this.profileRepository = new ProfileRepository();
  }

  public getProfile = async (userId: number) => {
    const userProfile = await this.profileRepository.findByUserId(userId);

    if (!userProfile) {
      throw new ErrorResponse(error.userError.unauthorized);
    }

    return {
      id: userProfile?.id,
      email: userProfile?.email,
      name: userProfile?.name,
      createAt: userProfile?.createAt,
      moneys: userProfile?.moneys,
    };
  };
}
