import { Application, json } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { apiRouter } from '../api';

export const expressLoader = (app: Application): void => {
  app.use(json());

  app.use(morgan('dev'));
  app.use(cors());

  app.use('/', apiRouter);

  app.get('/status', (req, res) => {
    return res.json({});
  });
};
