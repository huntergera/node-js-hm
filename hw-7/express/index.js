import express from 'express';
import cookieParser from 'cookie-parser';

import dotenv from 'dotenv';
dotenv.config();
import logger from 'morgan';

import { routes } from './routes/index.js';
import {
  globalErrorHandler,
  notFoundHandler,
  uidCookie,
} from './middleware/index.js';

const app = express();
const PORT = process.env.PORT || 3100;

app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(uidCookie);

app.use(logger('dev'));

routes.forEach(({ path, router }) => {
  app.use(path, router);
});

app.use(globalErrorHandler);
app.use(notFoundHandler);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
