import express from 'express';
const app = express();
let port = 3000;

app.listen(3000, () => {
  console.log(`App listening on port ${port} `);
});
