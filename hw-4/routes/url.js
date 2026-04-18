import express from 'express';
import { MESSAGES, STATUS_CODES } from '../common/index.js';
const router = express.Router();

const arrayValues = [];

router.post('/', (req, res) => {
  const { url } = req.query;

  if (!url || url.trim() === '') {
    return res
      .status(STATUS_CODES.BAD_REQUEST)
      .json({ error: MESSAGES.BAD_REQUEST });
  }

  arrayValues.push(url.trim());
  console.log(arrayValues);

  res.json({
    action: 'url',
    url: url.trim(),
    result: 'done',
  });
});

router.get('/:index', (req, res) => {
  const index = Number(req.params.index);

  if (!arrayValues[index]) {
    return res
      .status(STATUS_CODES.BAD_REQUEST)
      .json({ error: MESSAGES.BAD_REQUEST });
  }

  const url = arrayValues[index];
  const target = url.startsWith('http') ? url : `https://${url}`;

  res.redirect(target);
});

export default router;
