import { PostSignUpRequestType } from '../interface/user/signUp';
import { userRepository } from '../repository/user';
import { ErrorResponse } from '../utils/error-response';
import { error } from '../constants/error';
import { generatePasswordHash } from '../utils/hash';
import { JWTHelper } from '../helper/jwt';
import { comparePassword } from '../utils/hash';

export class AuthService {
  private userRepository;
  private JWTHelper;

  constructor() {
    this.userRepository = new userRepository();
    this.JWTHelper = new JWTHelper();
  }

  public signUp = async (userInfo: PostSignUpRequestType): Promise<void> => {
    const { email, name, password, passwordConfirmation } = userInfo;
    const alreadyRegisteredUser = await this.userRepository.findByUserId(email);

    if (alreadyRegisteredUser) {
      throw new ErrorResponse(error.userError.conflict);
    }

    if (password !== passwordConfirmation) {
      throw new ErrorResponse(error.userError.wrong);
    }

    const hashedPassword: string = await generatePasswordHash(password);

    return this.userRepository.createUser({ ...userInfo, password: hashedPassword });
  };

  public login = async (email: string, password: string) => {
    const user = await this.userRepository.findByUserId(email);

    if (!user) {
      throw new ErrorResponse(error.userError.notFound);
    }

    const isPasswordMatch = await comparePassword(password, user.password);

    if (!isPasswordMatch) {
      throw new ErrorResponse(error.userError.wrong);
    }

    const access_token = this.JWTHelper.generateJWTToken({ userId: user.id });

    return access_token;
  };
}
