import multer from 'multer';

export const multerErrorHandler = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    let message = err.message;

    if (err.code === 'LIMIT_FILE_SIZE') {
      message = 'File too large, limit 250KB';
    }

    return res.status(400).render('result', {
      status: 'error',
      message,
    });
  }

  next(err);
};

export default multerErrorHandler;
