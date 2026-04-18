import { STATUS_CODES, MESSAGES } from '../common/index.js';

export const notFoundHandler = (reg, res) => {
  res.status(STATUS_CODES.NOT_FOUND).send(MESSAGES.NOT_FOUND);
};
