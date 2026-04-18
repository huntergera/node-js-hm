import express from 'express';
const router = express.Router();

router.post('/', function (req, res) {
  const timestamp = Date.now();

  res.json({
    action: 'time',
    timestamp: timestamp,
  });
});

router.post('/sec', (req, res) => {
  res.json({
    action: 'timestamp',
    timestamp: Math.floor(Date.now() / 1000),
  });
});

export default router;
