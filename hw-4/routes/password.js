import express from 'express';
import generator from 'generate-password';
import { MESSAGES, STATUS_CODES } from '../common/index.js';
const router = express.Router();

router.get('/', function (req, res) {
  const { length } = req.query;
  let passwordLength = 16;

  if (length !== undefined) {
    const parsed = Number(length);

    if (!Number.isInteger(parsed) || parsed <= 0) {
      return res
        .status(STATUS_CODES.BAD_REQUEST)
        .json({ error: MESSAGES.BAD_REQUEST });
    }

    passwordLength = parsed;
  }

  const password = generator.generate({
    length: passwordLength,
    numbers: true,
    uppercase: true,
    lowercase: true,
  });

  res.json({
    action: 'password',
    length: passwordLength,
    password: password,
  });
});

export default router;
