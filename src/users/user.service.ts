import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

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
}
