import { randomBytes } from 'crypto';
import { MAX_AGE } from '../common/index.js';

export const uidCookie = (req, res, next) => {
  const uid = req.cookies.uid;

  if (!uid || uid.length !== 16) {
    const newUid = randomBytes(8).toString('hex');
    res.cookie('uid', newUid, { maxAge: MAX_AGE });
  }

  next();
};
