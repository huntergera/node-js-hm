import multer from 'multer';
import { MESSAGES } from '../common/index.js';

export const multerErrorHandler = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    let message = err.message;

    if (err.code === 'LIMIT_FILE_SIZE') {
      message = MESSAGES.FILE_SIZE_PROBLEM;
    }

    return res.status(400).render('result', {
      status: 'error',
      message,
    });
  }

  next(err);
};
