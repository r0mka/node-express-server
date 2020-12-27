import express from 'express';
import mongoose from 'mongoose';
import { home } from './modules/home/home';
import { info } from './modules/info/info';
import { errorHandler } from './modules/core/errorHandler';
import { logger } from './modules/core/logger';
import { register } from './modules/register/register';
import { cors } from './modules/core/cors';
import { dbConnect } from './modules/core/db';

const PORT = 5000;
const app = express();
logger(app);
app.use(express.json());
cors(app);

app.get('/', home);
app.get('/info', info);
app.post('/register', register);

errorHandler(app);

dbConnect();

app.listen(process.env.PORT || PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`),
);
