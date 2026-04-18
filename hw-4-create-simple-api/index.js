import express from 'express';

import dotenv from 'dotenv';
dotenv.config();
import logger from 'morgan';

//! import routes
import {
  cardRouter,
  homeRouter,
  passwordRouter,
  randomNumberRouter,
  testPostRouter,
  testRouter,
  timeRouter,
  timestampRouter,
  urlRouter,
} from './routes/index.js';
import { ROUTES } from './common/index.js';

import { notFoundHandler } from './middleware/index.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.json());

app.use(ROUTES.HOME, homeRouter);
app.use(ROUTES.RANDOM_NUMBER, randomNumberRouter);
app.use(ROUTES.TIME, timeRouter);
app.use(ROUTES.TIMESTAMP, timestampRouter);
app.use(ROUTES.PASSWORD, passwordRouter);
app.use(ROUTES.TEST, testRouter);
app.use(ROUTES.TEST_POST, testPostRouter);
app.use(ROUTES.CARD, cardRouter);
app.use(ROUTES.URL, urlRouter);

app.use(notFoundHandler);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
