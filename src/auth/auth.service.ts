import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(@InjectRepository(User) private usersRepository: Repository<User>) {}

  async register(email: string, name: string, password: string, passwordConfirmation: string): Promise<User> {
    const existingUser: User = await this.usersRepository.findOne({ email });
    if (existingUser) {
      throw new Error('이메일이 이미 있습니다.');
    }

    if (password !== passwordConfirmation) {
      throw new Error('비밀번호가 틀렸습니다.');
    }

    const hashedPassword: string = await bcrypt.hash(password, 10);

    const newUser: User = this.usersRepository.create({ email, name, password: hashedPassword });
    return this.usersRepository.save(newUser);
  }

  async validateUser(email: string, password: string): Promise<User> {
    const user: User = await this.usersRepository.findOne({ email });

    if (!user) {
      return null;
    }

    const isPasswordValid: boolean = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return null;
    }

    return user;
  }

  login(user: User) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: sign(payload, 'sivang'),
    };
  }
}
