import { Application } from 'express';
import { expressLoader } from './express';

export const loader = (app: Application) => {
  expressLoader(app);
  console.info('Express loaded');
};
