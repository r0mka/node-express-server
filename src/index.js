import express from 'express';
import { errorHandler } from './modules/core/errorHandler';
import { logger } from './modules/core/logger';
import { cors } from './modules/core/cors';
import { dbConnect } from './modules/core/db';
import { routes } from './modules/core/routes';

const PORT = 5000;
const app = express();
logger(app);
app.use(express.json());
cors(app);
routes(app);

// app.get('/', home);

// app.post('/register', register);

errorHandler(app);

dbConnect();

app.listen(process.env.PORT || PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`),
);
