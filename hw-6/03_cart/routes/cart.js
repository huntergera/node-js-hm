import express from 'express';
import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { MESSAGES } from '../common/index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const router = express.Router();

const goods = JSON.parse(
  readFileSync(path.join(__dirname, '..', 'data', 'goods.json'), 'utf-8'),
);

router.get('/', (req, res) => {
  const cartCookie = req.cookies.cart;

  if (!cartCookie) {
    return res.send(MESSAGES.EMPTY_CART);
  }

  const cart = JSON.parse(decodeURIComponent(cartCookie));
  const [productUrl, quantity] = Object.entries(cart)[0];
  const product = goods.find((item) => item.url === productUrl);

  if (!product || product.stock < Number(quantity)) {
    return res.send('0');
  }

  res.send('1');
});

export default router;
