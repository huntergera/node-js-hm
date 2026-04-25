import { MESSAGES } from '../common/index.js';

export const globalErrorHandler = (err, req, res, next) => {
  console.error(err);

  res.status(err.status || 500).json({
    status: 'error',
    message: err.message || MESSAGES.SERVER_ERROR,
  });
};
