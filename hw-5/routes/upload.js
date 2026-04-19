import express from 'express';
const router = express.Router();
import multer from 'multer';

import path from 'path';
import { fileURLToPath } from 'url';
import { MESSAGES, STATUS_CODES } from '../common/index.js';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const uploadDir = path.join(__dirname, '..', 'files');

const exts = ['.png', '.jpg', '.jpeg', '.gif'];
const maxSize = 250 * 1024;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '_' + Math.round(Math.random() * 10000);
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, 'temp_files_' + uniqueName + ext);
  },
});

const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLocaleLowerCase();
  if (exts.includes(ext)) cb(null, true);
  else cb(new Error(MESSAGES.FILE_EXTENSION));
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: maxSize,
  },
});

router
  .route('/')
  .get((req, res) => {
    res.render('upload', { title: 'File upload' });
  })
  .post((req, res) => {
    upload.single('file')(req, res, (err) => {
      console.log(req.file);
      if (err) {
        if (err.code === 'LIMIT_FILE_SIZE') {
          return res.render('result', {
            status: 'error',
            message: MESSAGES.FILE_SIZE_PROBLEM,
          });
        }
        return res.render('result', {
          status: STATUS_CODES.ERROR,
          message: err.message,
        });
      }

      if (!req.file) {
        return res.render('result', {
          status: STATUS_CODES.ERROR,
          message: MESSAGES.FILE_NOT_SELECTED,
        });
      }

      res.render('result', {
        status: 'success',
        fileName: req.file.originalname,
      });
    });
  });

export default router;
