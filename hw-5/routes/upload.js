import express from 'express';
const router = express.Router();
import { allFiles } from '../data/files.js';

import { MESSAGES, STATUS_CODES } from '../common/index.js';
import { uploadMulter } from '../middleware/index.js';

router
  .route('/')
  .get((req, res) => {
    res.render('upload', { title: 'File upload' });
  })
  .post(uploadMulter.single('file'), (req, res, next) => {
    try {
      if (!req.file) {
        return res.render('result', {
          status: STATUS_CODES.ERROR,
          message: MESSAGES.FILE_NOT_SELECTED,
        });
      }

      allFiles.push({
        fileName: req.file.filename,
        originalName: req.file.originalname,
        size: req.file.size,
        uploadedAt: new Date(),
      });

      res.render('result', {
        status: 'success',
        fileName: req.file.filename,
      });
    } catch (err) {
      next(err);
    }
  });

export default router;
