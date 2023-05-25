import { Application, json, Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { apiRouter } from '../api';

export const expressLoader = (app: Application): void => {
  app.use(json());

  app.use(morgan('dev'));

  const CorsOption = {
    origin: '*',
    method: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD'],
    credentials: true,
  };

  app.use(cors(CorsOption));

  app.use('/', apiRouter);

  app.get('/status', (req: Request, res: Response) => {
    return res.json({});
  });
};
