import { Money } from 'src/money/money.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  joinDate: Date;

  @Column({ default: 0 })
  autoRegistrationCount: number;

  @Column({ default: 0 })
  totalMoneySpent: number;

  @Column({ default: 0 })
  totalMoneySaved: number;

  @OneToMany(() => Money, money => money.id)
  money: Money[];
}
