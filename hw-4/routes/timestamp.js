import express from 'express';
const router = express.Router();

const sendTimestamp = (req, res, timestamp) => {
  res.json({
    action: 'timestamp',
    timestamp,
  });
};

router.post('/', (req, res) => {
  sendTimestamp(req, res, Date.now());
});

router.post('/sec', (req, res) => {
  sendTimestamp(req, res, Math.floor(Date.now() / 1000));
});

export default router;
