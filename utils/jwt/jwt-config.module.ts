import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtConfiguration } from '.';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      load: [JwtConfiguration],
    }),
    JwtModule.registerAsync({
      useFactory: async (configSerivce: ConfigService) => ({
        secret: configSerivce.get<string>('jwt.secretKey'),
      }),
      inject: [ConfigService],
    }),
  ],
})
export class GlobalJwtModule {}
