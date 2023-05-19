import { Application, json } from 'express';
import cors from 'cors';
import morgan from 'morgan';

export const expressLoader = (app: Application) => {
  app.use(json());

  app.use(morgan('dev'));
  app.use(cors());

  app.get('/status', (req, res) => {
    return res.json({});
  });
};
