import Seller from '../models/Seller.js';
import Store from '../models/Store.js';
import { MESSAGES, STATUS } from '../common/constants.js';
import mongoose from 'mongoose';

export const validateSaleRelations = async (req, res, next) => {
  try {
    const { sellerId, storeId } = req.body;

    if (sellerId && !mongoose.Types.ObjectId.isValid(sellerId)) {
      return res.status(400).json({
        status: 'error',
        message: MESSAGES.ID_ERROR,
      });
    }

    if (storeId && !mongoose.Types.ObjectId.isValid(storeId)) {
      return res.status(400).json({
        status: 'error',
        message: MESSAGES.ID_ERROR,
      });
    }

    const [seller, store] = await Promise.all([
      Seller.findById(sellerId),
      Store.findById(storeId),
    ]);

    if (!seller || seller.status === STATUS.INACTIVE) {
      return res
        .status(404)
        .json({ status: 'error', message: MESSAGES.SELLER_NOT_FOUND });
    }

    if (!store || store.status === STATUS.INACTIVE) {
      return res
        .status(404)
        .json({ status: 'error', message: MESSAGES.STORE_NOT_FOUND });
    }

    next();
  } catch (error) {
    next(error);
  }
};
