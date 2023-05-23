import { Application } from 'express';
import { expressLoader } from './express';

export const loader = (app: Application): void => {
  expressLoader(app);
  console.info('Express loaded');
};
