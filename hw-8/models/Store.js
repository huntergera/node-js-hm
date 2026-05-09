import mongoose from 'mongoose';
import { STATUS } from '../common/constants.js';

const storeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters'],
      maxlength: [100, 'Name must not exceed 100 characters'],
    },
    address: {
      type: String,
      trim: true,
      minlength: [2, 'Address must be at least 2 characters'],
      maxlength: [255, 'Address must not exceed 255 characters'],
    },
    status: {
      type: Number,
      enum: [STATUS.ACTIVE, STATUS.INACTIVE],
      default: STATUS.INACTIVE,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('Store', storeSchema);
