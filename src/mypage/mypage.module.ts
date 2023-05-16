import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MypageService } from './mypage.service';
import { MypageController } from './mypage.controller';
import { User } from 'src/users/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [MypageService],
  controllers: [MypageController],
  exports: [MypageService],
})
export class MypageModule {}
