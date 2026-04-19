import express from 'express';
import generator from 'generate-password';
import Ajv from 'ajv';
import { schemaGoods } from '../models/schemaGoods.js';
import { MESSAGES, STATUS_CODES } from '../common/index.js';

const router = express.Router();
const ajv = new Ajv();
const validate = ajv.compile(schemaGoods);

router.post('/', (req, res) => {
  if (!validate(req.body)) {
    return res
      .status(STATUS_CODES.BAD_REQUEST)
      .json({ error: MESSAGES.BAD_REQUEST });
  }

  const articulValue = generator.generate({
    length: 8,
    numbers: true,
    uppercase: true,
    lowercase: true,
  });

  const { goods, total_amount, total_sum } = Object.entries(req.body).reduce(
    (acc, [key, { price, amount }]) => ({
      goods: [...acc.goods, key],
      total_amount: acc.total_amount + amount,
      total_sum: acc.total_sum + price * amount,
    }),
    { goods: [], total_amount: 0, total_sum: 0 },
  );

  const resultData = {
    articul: articulValue,
    action: 'cart',
    total_amount: total_amount,
    total_sum: total_sum,
    goods: goods,
  };

  res.json(resultData);
});

export default router;
