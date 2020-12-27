import { Router } from 'express';
import { userRegister } from './userRegister';
import { userGetAll } from './userGetAll';

export const userRouter = Router();

userRouter.get('/', userGetAll);
userRouter.post('/register', userRegister);
