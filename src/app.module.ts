import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';

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
    JwtModule.register({
      secret: 'sivang',
      signOptions: { expiresIn: '60s' },
    }),
    AuthModule,
  ],
})
export class AppModule {}
