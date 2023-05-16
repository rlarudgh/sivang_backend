import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
import { MypageDto } from 'src/mypage/mypage.dto';
import { MypageType } from 'src/mypage/mypage.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: UserRepository,
  ) {}

  async findByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({ email });
  }

  async createUser(email: string, name: string, password: string): Promise<User> {
    const user: User = this.userRepository.create({ email, name, password });
    return this.userRepository.save(user);
  }

  async getMypage(request: any):Promise<MypageType> {
    const user = await this.userRepository.findOne({ where: { id: request.user.id } });
    const mypageDto = new MypageDto();

    mypageDto.email = user.email;
    mypageDto.name = user.name;
    mypageDto.joinDate = user.joinDate;
    mypageDto.autoRegistrationCount = user.autoRegistrationCount;
    mypageDto.totalMoneySpent = user.totalMoneySpent;
    mypageDto.totalMoneySaved = user.totalMoneySaved;

    return mypageDto;
  }
}
