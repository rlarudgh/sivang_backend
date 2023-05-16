import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Money } from './money.entity';
import { MoneyService } from './money.service';
import { MoneyController } from './money.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Money])],
  providers: [MoneyService],
  controllers: [MoneyController],
  exports: [MoneyService],
})
export class MoneyModule {}
