import express from 'express';
const router = express.Router();

router.get('/', function (req, res) {
  const dateTime = new Date().toISOString();

  res.json({
    action: 'time',
    'date-time': dateTime,
  });
});

export default router;
