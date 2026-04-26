import express from 'express';

import dotenv from 'dotenv';
dotenv.config();
import logger from 'morgan';

import { routes } from './routes/index.js';
import { globalErrorHandler, notFoundHandler } from './middleware/index.js';

const app = express();
const PORT = process.env.PORT || 3100;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(logger('dev'));

routes.forEach(({ path, router }) => {
  app.use(path, router);
});

app.use(globalErrorHandler);
app.use(notFoundHandler);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
