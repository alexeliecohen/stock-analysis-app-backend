// import {router} from './routes/authenticate';
import express from 'express';

const app = express();
// app.use(router);

app.listen(3000, () => {
  console.log('listening to port 3000');
});

