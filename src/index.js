import express from 'express';
import { get } from 'lodash';

const app = express();

const PORT = 5000;

app.get('/', (req, res) => {
  res.send('Hello from server');
});

app.get('/info', (req, res) => {
  const obj = {
    name: 'roman nikolaenkov web dev',
  };

  const name = get(obj, 'name', 'unknown');

  res.send(`Info route ${name}`);
});

app.listen(process.env.PORT || PORT, () => console.log('Server running on port: ', PORT));
