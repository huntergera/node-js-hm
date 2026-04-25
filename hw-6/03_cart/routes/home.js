import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const router = express.Router();

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

export default router;
