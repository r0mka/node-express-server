import { Router } from 'express';
import { userRegister } from './userRegister';
import { userGetAll } from './userGetAll';
import { userGetById } from './userGetById';
import { userUpdateById } from './userUpdateById';
import { userDeleteById } from './userDeleteById';
import { userDeleteAll } from './userDeleteAll';

export const userRouter = Router();

userRouter.get('/', userGetAll);
userRouter.post('/register', userRegister);
userRouter.get('/:id', userGetById);
userRouter.patch('/:id', userUpdateById);
userRouter.delete('/:id', userDeleteById);
userRouter.delete('/', userDeleteAll);
