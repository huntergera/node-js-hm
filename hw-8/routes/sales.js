import express from 'express';
import Sale from '../models/Sale.js';
import Seller from '../models/Seller.js';
import Store from '../models/Store.js';
import { MESSAGES, STATUS } from '../common/constants.js';
const router = express.Router();
import mongoose from 'mongoose';

router.get('/', async (req, res, next) => {
  try {
    const { storeId, sellerId, dateFrom, dateTo, sort, page, limit } =
      req.query;
    const filter = { status: STATUS.ACTIVE };

    if (storeId) {
      if (!mongoose.isValidObjectId(storeId)) {
        return res
          .status(400)
          .json({ status: 'error', message: MESSAGES.STORE_FORMAT_ERROR });
      }
      filter.storeId = storeId;
    }

    if (sellerId) {
      if (!mongoose.isValidObjectId(sellerId)) {
        return res
          .status(400)
          .json({ status: 'error', message: MESSAGES.SELLER_FORMAT_ERROR });
      }
      filter.sellerId = sellerId;
    }

    if (dateFrom || dateTo) {
      filter.date = {};
      if (dateFrom) {
        const from = new Date(dateFrom);
        if (isNaN(from.getTime())) {
          return res
            .status(400)
            .json({ status: 'error', message: MESSAGES.DATE_FORMAT_ERROR });
        }
        filter.date.$gte = from;
      }
      if (dateTo) {
        const to = new Date(dateTo);
        if (isNaN(to.getTime())) {
          return res
            .status(400)
            .json({ status: 'error', message: MESSAGES.DATE_FORMAT_ERROR });
        }
        filter.date.$lte = to;
      }
    }

    let sortOption = {};
    if (sort) {
      sort.split(',').forEach((field) => {
        if (field.startsWith('-')) {
          sortOption[field.slice(1)] = -1;
        } else {
          sortOption[field] = 1;
        }
      });
    }

    const currentPage = Number(page) || 1;
    const pageLimit = Number(limit) || 10;
    const skip = (currentPage - 1) * pageLimit;

    const sales = await Sale.find(filter)
      .populate('sellerId', 'name email')
      .populate('storeId', 'name address')
      .sort(sortOption)
      .skip(skip)
      .limit(pageLimit);

    const total = await Sale.countDocuments(filter);

    res.json({
      data: sales,
      meta: {
        total,
        page: currentPage,
        limit: pageLimit,
        totalPages: Math.ceil(total / pageLimit),
      },
    });
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const sale = await Sale.findById(req.params.id)
      .populate('sellerId', 'name email')
      .populate('storeId', 'name address');
    if (!sale || sale.status === STATUS.INACTIVE) {
      return res
        .status(404)
        .json({ status: 'error', message: MESSAGES.NOT_FOUND });
    }
    res.json(sale);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { sellerId, storeId } = req.body;

    const seller = await Seller.findById(sellerId);
    if (!seller || seller.status === STATUS.INACTIVE) {
      return res
        .status(404)
        .json({ status: 'error', message: MESSAGES.SELLER_NOT_FOUND });
    }

    const store = await Store.findById(storeId);
    if (!store || store.status === STATUS.INACTIVE) {
      return res
        .status(404)
        .json({ status: 'error', message: MESSAGES.STORE_NOT_FOUND });
    }

    const sale = await Sale.create(req.body);
    res.status(201).json(sale);
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', async (req, res, next) => {
  try {
    const sale = await Sale.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!sale) {
      return res
        .status(404)
        .json({ status: 'error', message: MESSAGES.NOT_FOUND });
    }
    res.json(sale);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const sale = await Sale.findByIdAndUpdate(
      req.params.id,
      { status: STATUS.INACTIVE },
      { new: true },
    );
    if (!sale) {
      return res
        .status(404)
        .json({ status: 'error', message: MESSAGES.NOT_FOUND });
    }
    res.status(204).send();
  } catch (error) {
    next(error);
  }
});

export default router;
