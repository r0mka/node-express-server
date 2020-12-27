import { Router } from 'express';
import { userRegister } from './userRegister';
import { userGetAll } from './userGetAll';
import { userGetById } from './userGetById';

export const userRouter = Router();

userRouter.get('/', userGetAll);
userRouter.post('/register', userRegister);
userRouter.get('/:id', userGetById);
