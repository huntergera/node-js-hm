import express from 'express';
const router = express.Router();
import { STATUS_CODES, MESSAGES } from '../common/index.js';

router.get('/', function (req, res) {
  const { min, max } = req.query;

  if (min === undefined && max === undefined) {
    const randomNumber = Math.floor(Math.random() * 11);

    return res.json({
      action: 'random-number',
      random: randomNumber,
    });
  }

  const minNum = Number(min);
  const maxNum = Number(max);

  if (
    min === undefined ||
    max === undefined ||
    !Number.isInteger(minNum) ||
    !Number.isInteger(maxNum) ||
    minNum > maxNum
  ) {
    return res
      .status(STATUS_CODES.BAD_REQUEST)
      .json({ error: MESSAGES.BAD_REQUEST });
  }

  const randomNumber =
    Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

  res.json({
    action: 'random-number',
    random: randomNumber,
  });
});

export default router;
