import express from 'express';
const router = express.Router();

import City from '../models/City.js';
import { MESSAGES } from '../common/constants.js';

router.get('/', async (req, res) => {
  const { city } = req.query;
  try {
    if (typeof city !== 'string' || !city.trim()) {
      return res.status(400).json({ message: MESSAGES.VALIDATION_ERROR });
    }

    const escaped = city.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    const result = await City.find({
      name: {
        $regex: `^${escaped}`,
        $options: 'i',
      },
    }).limit(10);

    const cities = result.map((city) => city.name);

    res.json({ cities });
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Error');
  }
});

export default router;
