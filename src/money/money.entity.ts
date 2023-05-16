import { MoneyType } from 'src/enum/money';
import { User } from 'src/users/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Money {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  money: number;

  @Column()
  title: string;

  @Column()
  contents: string;

  @Column()
  moneyType: MoneyType;

  @ManyToOne(() => User, user => user.id)
  user: User[];
}
