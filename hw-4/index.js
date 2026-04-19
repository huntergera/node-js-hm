import express from 'express';

import dotenv from 'dotenv';
dotenv.config();
import logger from 'morgan';

import { routes } from './routes/index.js';
import { notFoundHandler } from './middleware/index.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.json());

routes.forEach(({ path, router }) => {
  app.use(path, router);
});

app.use(notFoundHandler);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
