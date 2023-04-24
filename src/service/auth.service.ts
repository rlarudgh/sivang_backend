import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entity/user.entity';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/dto/user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const saltRounds: number = 10;
    const { name, email, password }: CreateUserDto = createUserDto;
    const hashedPassword: string = await bcrypt.hash(password, saltRounds);
    const user: User = this.userRepository.create({
      name,
      email,
      password: hashedPassword,
    });
    return await this.userRepository.save(user);
  }
}
