import express from 'express';
import { MAX_AGE, UTM_KEYS } from '../common/index.js';
const router = express.Router();

router.get('/', function (req, res) {
  UTM_KEYS.forEach((key) => {
    if (req.query[key]) {
      res.cookie(key, req.query[key], { maxAge: MAX_AGE });
    }
  });

  res.send('Product page');
});

export default router;
