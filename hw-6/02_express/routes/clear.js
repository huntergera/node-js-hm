import express from 'express';
const router = express.Router();

router.get('/', function (req, res) {
  Object.keys(req.cookies).forEach((key) => {
    res.clearCookie(key);
  });
  res.send('Cookies cleared');
});

export default router;
