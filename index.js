const express = require('express');

const app = express();

const PORT = 5000;

app.get('/', (req, res) => {
  res.send('Hello from server');
});

app.get('/info', (req, res) => {
  res.send('Info route');
});

app.listen(process.env.PORT || PORT, () =>
  console.log('Server running on port: ', PORT)
);
