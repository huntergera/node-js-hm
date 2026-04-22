import express from 'express';
const router = express.Router();
import { allFiles } from '../data/files.js';

router.get('/', function (req, res) {
  const formattedFiles = allFiles.map((file) => ({
    ...file,
    size: (file.size / 1024).toFixed(2) + ' kb',
    uploadedAt: new Date(file.uploadedAt).toLocaleString(),
  }));

  res.render('file-list', {
    title: 'Uploaded Files',
    files: formattedFiles,
  });
});

export default router;
