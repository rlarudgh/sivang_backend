import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { MypageDto } from './mypage.dto';

@Injectable()
export class MypageService {
//   constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

//   async getMypage(userId: number): Promise<MypageDto> {
//     const user = await this.userRepository.findOne({ where: { id: userId } });
//     const mypageDto = new MypageDto();

//     mypageDto.email = user.email;
//     mypageDto.name = user.name;
//     mypageDto.joinDate = user.joinDate;
//     mypageDto.autoRegistrationCount = user.autoRegistrationCount;
//     mypageDto.totalMoneySpent = user.totalMoneySpent;
//     mypageDto.totalMoneySaved = user.totalMoneySaved;

//     return mypageDto;
//   }
}
