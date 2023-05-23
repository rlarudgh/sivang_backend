import express, { Express } from 'express';
import { loader } from './loader';
import { config, dbConfig } from './config';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const create = async (): Promise<void> => {
  const app: Express = express();

  prisma
    .$connect()
    .then(() => {
      console.log('Connected to the database');
    })
    .catch((error: unknown) => {
      console.error('Failed to connect to the database:', error);
    });

  await dotenv.config();

  await loader(app);
  app.listen(config.port);
};

create()
  .then(() => console.log(`Server Run on ${config.port}`))
  .catch((err: unknown) => {
    console.error('Server failed to start');
    console.error(err);
    process.exit(1);
  });
