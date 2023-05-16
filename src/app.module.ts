import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { MoneyModule } from './money/money.module';
import { UserModule } from './users/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from 'utils/jwt/jwt.strategy';
import { UserRepository } from './users/user.repository';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: parseInt('3306', 10),
      username: 'root',
      password: '1234',
      database: 'sivang',
      synchronize: 'true',
      logging: true,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'sivang',
      signOptions: { expiresIn: '60s' },
    }),
    AuthModule,
    UserModule,
    MoneyModule,
  ],
  providers: [JwtStrategy, UserRepository],
})
export class AppModule {}
