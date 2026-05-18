import express from 'express';
const router = express.Router();
import { MESSAGES } from '../common/constants.js';
import Store from '../models/Store.js';
import { STATUS } from '../common/constants.js';
import { validateObjectId, checkEmptyBody } from '../middleware/validators.js';

router.get('/', async (req, res, next) => {
  try {
    const stores = await Store.find({ status: STATUS.ACTIVE });
    res.json({
      data: stores,
      count: stores.length,
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
});

router.get('/:id', validateObjectId, async (req, res, next) => {
  try {
    const store = await Store.findById(req.params.id);
    if (!store || store.status === STATUS.INACTIVE) {
      return res
        .status(404)
        .json({ status: 'error', message: MESSAGES.NOT_FOUND });
    }
    res.json(store);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
});

router.post('/', checkEmptyBody, async (req, res, next) => {
  try {
    const store = await Store.create(req.body);
    res.status(201).json(store);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
});

router.put('/:id', validateObjectId, checkEmptyBody, async (req, res, next) => {
  try {
    const store = await Store.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!store) {
      return res
        .status(404)
        .json({ status: 'error', message: MESSAGES.NOT_FOUND });
    }
    res.json(store);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', validateObjectId, async (req, res, next) => {
  try {
    const store = await Store.findByIdAndUpdate(
      req.params.id,
      { status: STATUS.INACTIVE },
      { new: true },
    );
    if (!store) {
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
