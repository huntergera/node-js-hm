import express from 'express';

import dotenv from 'dotenv';
dotenv.config();
import logger from 'morgan';
import cors from "cors";

import connectDB from "./config/database.js";

import { routes } from './routes/index.js';
import { globalErrorHandler, notFoundHandler } from './middleware/index.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(logger('dev'));

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST']
}));


routes.forEach(({ path, router }) => {
  app.use(path, router);
});


app.use(globalErrorHandler);
app.use(notFoundHandler);

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
}

startServer();
