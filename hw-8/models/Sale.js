import mongoose from 'mongoose';
import { STATUS } from '../common/constants.js';

const saleSchema = new mongoose.Schema(
  {
    sellerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Seller',
      required: [true, 'Seller is required'],
    },
    storeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Store',
      required: [true, 'Store is required'],
    },
    amount: {
      type: Number,
      required: [true, 'Amount is required'],
      min: [0, 'Amount must be greater than or equal to 0'],
      validate: {
        validator: (v) => /^\d+(\.\d{1,2})?$/.test(v.toString()),
        message: 'Amount must have at most 2 decimal places',
      },
    },
    itemsCount: {
      type: Number,
      required: [true, 'Items count is required'],
      min: [1, 'Items count must be greater than 0'],
      validate: {
        validator: Number.isInteger,
        message: 'Items count must be an integer',
      },
    },
    status: {
      type: Number,
      enum: [STATUS.ACTIVE, STATUS.INACTIVE],
      default: STATUS.ACTIVE,
    },
    date: {
      type: Date,
      required: [true, 'Date is required'],
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('Sale', saleSchema);
