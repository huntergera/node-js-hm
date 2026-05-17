import mongoose from 'mongoose';
import { MESSAGES } from '../common/constants.js';

export const validateObjectId = (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res
      .status(400)
      .json({ status: 'error', message: MESSAGES.ID_ERROR });
  }
  next();
};

export const checkEmptyBody = (req, res, next) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res
      .status(400)
      .json({ status: 'error', message: MESSAGES.EMPTY_BODY_ERROR });
  }
  next();
};
