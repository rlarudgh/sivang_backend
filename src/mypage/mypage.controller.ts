import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from 'src/users/user.service';
import { MypageType } from './mypage.interface';

@Controller('mypage')
@UseGuards(AuthGuard())
export class MypageController {
//   constructor(private readonly userService: UserService) {}

//   @Get()
//   @UseGuards(AuthGuard('jwt'))
//   async getMypage(request: any): Promise<MypageType> {
//     const user = await this.userService.findByEmail(request.email);
//     return {
//         name: user.name,
//         autoRegistrationCount: user.autoRegistrationCount,
//         totalMoneySpent: user.totalMoneySpent,
//         totalMoneySaved: user.totalMoneySaved,
//         joinDate: user.joinDate,
//         email: user.email
//     }
//   }
}
