import express from 'express';
import { get } from 'lodash';

const app = express();

const PORT = 5000;

app.get('/', (req, res) => {
  res.json({ msg: 'Hello from server' });
});

app.get('/info', (req, res) => {
  const obj = {
    name: 'roman nikolaenkov web dev',
  };

  const name = get(obj, 'name', 'unknown');

  res.json({ msg: `Info route ${name}` });
});

app.use((req, res) => {
  res.status(404).json({ err: 'API NOT FOUND' });
});

app.listen(process.env.PORT || PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`),
);
