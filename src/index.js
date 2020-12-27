import express from 'express';
import { home } from './home';
import { info } from './info';
import { errorHandler } from './errorHandler';
import { logger } from './logger';
import { register } from './register';

const PORT = 5000;
const app = express();
app.use(express.json());
logger(app);

app.get('/', home);
app.get('/info', info);
app.post('/register', register);

errorHandler(app);

app.listen(process.env.PORT || PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`),
);
