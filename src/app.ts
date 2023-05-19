import express from 'express';
import { loader } from './loader';
import { config } from './config';

const create = async (): Promise<void> => {
  const app = express();

  await loader(app);
  app.listen(config.port);
};

create()
  .then(() => console.log(`Server Run on ${config.port}`))
  .catch((err: any) => {
    console.error('Server failed to start');
    console.error(err);
    process.exit(1);
  });
