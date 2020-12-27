import { Router } from 'express';
import { infoGet } from './infoGet';

export const infoRouter = Router();

infoRouter.get('/', infoGet);
