import express from 'express';
import { home } from './home';
import { info } from './info';
import { errorHandler } from './errorHandler';

const app = express();
app.use(express.json());

const PORT = 5000;

app.get('/', home);

app.get('/info', info);

errorHandler(app);

app.listen(process.env.PORT || PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`),
);
