import express from 'express';
const router = express.Router();

import City from "../models/City.js";

router.get('/', async (req, res) => {
  const {city} = req.query;
  const result = await City.find({
    name: {
      $regex: city,
      $options: "i"
    }
  });

  const cities = result.map((city) => city.name);
  
  res.json({cities})
});

export default router;
