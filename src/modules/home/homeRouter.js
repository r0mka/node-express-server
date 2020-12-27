import { Router } from 'express';
import { homeGet } from './homeGet';

export const homeRouter = Router();

homeRouter.get('/', homeGet);
