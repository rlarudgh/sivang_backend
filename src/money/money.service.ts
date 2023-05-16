import { Injectable } from '@nestjs/common';
import { Money } from './money.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MoneyService {
  constructor(
    @InjectRepository(Money)
    private moneyRepository: Repository<Money>,
  ) {}

  async findAll(): Promise<Money[]> {
    return await this.moneyRepository.find();
  }

  async findOne(id: number): Promise<Money> {
    return await this.moneyRepository.findOne(id);
  }

  async create(money: Money): Promise<Money> {
    return await this.moneyRepository.save(money);
  }
}
