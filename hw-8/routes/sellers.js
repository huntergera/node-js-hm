import express from 'express';
const router = express.Router();
import { MESSAGES } from '../common/constants.js';
import Seller from '../models/Seller.js';
import { STATUS } from '../common/constants.js';

router.get('/', async (req, res, next) => {
  try {
    const sellers = await Seller.find({ status: STATUS.ACTIVE });
    res.json({
      data: sellers,
      count: sellers.length,
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const seller = await Seller.findById(req.params.id);
    if (!seller || seller.status === STATUS.INACTIVE) {
      return res
        .status(404)
        .json({ status: 'error', message: MESSAGES.NOT_FOUND });
    }
    res.json(seller);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const seller = await Seller.create(req.body);
    res.status(201).json(seller);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const seller = await Seller.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!seller) {
      return res
        .status(404)
        .json({ status: 'error', message: MESSAGES.NOT_FOUND });
    }
    res.json(seller);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const seller = await Seller.findByIdAndUpdate(
      req.params.id,
      { status: STATUS.INACTIVE },
      { new: true },
    );
    if (!seller) {
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
