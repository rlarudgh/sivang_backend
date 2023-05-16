import { Body, Controller, Get, Post } from '@nestjs/common';
import { MoneyService } from './money.service';
import { Money } from './money.entity';

@Controller('money')
export class MoneyController {
  constructor(private moneyService: MoneyService) {}

  @Get()
  async findAll() {
    return this.moneyService.findAll();
  }

  @Get(':id')
  async findOne(id: number) {
    return this.moneyService.findOne(id);
  }

  @Post('create')
  async create(@Body() money: Money): Promise<Money> {
    return this.moneyService.create(money);
  }
}
