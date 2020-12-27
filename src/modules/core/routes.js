import { infoRouter } from '../info/infoRouter';
import { userRouter } from '../user/userRouter';
import { homeRouter } from '../home/homeRouter';

export const routes = (app) => {
  app.use('/', homeRouter);
  app.use('/info', infoRouter);
  app.use('/user', userRouter);
};
