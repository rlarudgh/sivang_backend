import { Controller, Get, UseGuards } from '@nestjs/common';
import { MypageType } from 'src/mypage/mypage.interface';
import { MypageDto } from 'src/mypage/mypage.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(
    @InjectRepository(User)
    private userRepository: UserRepository,
  ) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('mypage')
  async getMypage(request): Promise<MypageType> {
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
