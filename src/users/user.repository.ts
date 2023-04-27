import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(email: string, password: string, name: string): Promise<User> {
    const user: User = this.create({ email, password, name });
    await this.save(user);
    return user;
  }

  async findUserByEmail(email: string): Promise<User> {
    const user: User = await this.findOne({ email });
    return user;
  }
}
