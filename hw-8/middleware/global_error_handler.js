import { MESSAGES } from '../common/index.js';

export const globalErrorHandler = (err, req, res, next) => {
  console.error(err);

  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map((e) => e.message);
    return res.status(400).json({
      status: 'error',
      message: messages.join(', '),
    });
  }

  if (err.name === 'CastError') {
    return res.status(400).json({
      status: 'error',
      message: MESSAGES.ID_ERROR,
    });
  }

  if (err.code === 11000) {
    return res.status(400).json({
      status: 'error',
      message: MESSAGES.DUBLICATE_ERROR,
    });
  }

  res.status(err.status || 500).json({
    status: 'error',
    message: err.message || MESSAGES.SERVER_ERROR,
  });
};
