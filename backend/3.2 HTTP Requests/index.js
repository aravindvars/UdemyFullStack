import express from 'express';
const app = express();
let port = 3000;

app.get('/', (req, res) => {
  //   res.send('A new backend server I created!');
  res.send('<h1>A new backend server </h1> <h2>A new backend server');
});

app.get('/about', (req, res) => {
  //   res.send('A new backend server I created!');
  res.send('<h1>About Me !!!</h1>');
});

app.listen(port, () => {
  console.log(`App listening on port ${port} `);
});
