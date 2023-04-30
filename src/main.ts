import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from 'utils/swagger';

const create = async () => {
  const app = await NestFactory.create(AppModule);

  setupSwagger(app);

  app.enableCors();

  await app.listen(3001);
};
create();
