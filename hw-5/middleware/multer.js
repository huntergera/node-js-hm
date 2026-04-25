import path from 'path';
import { fileURLToPath } from 'url';
import multer from 'multer';
import { FILE_EXTENSIONS, MAX_SIZE, MESSAGES } from '../common/index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const uploadDir = path.join(__dirname, '..', 'files');

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
  if (FILE_EXTENSIONS.includes(ext)) cb(null, true);
  else cb(new Error(MESSAGES.FILE_EXTENSION));
};

export const uploadMulter = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: MAX_SIZE,
  },
});
