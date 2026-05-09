import mongoose from 'mongoose';
import { STATUS } from '../common/constants.js';

const sellerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters'],
      maxlength: [100, 'Name must not exceed 100 characters'],
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      required: [true, 'Email is required'],
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Invalid email format'],
    },
    phone: {
      type: String,
      trim: true,
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

export default mongoose.model('Seller', sellerSchema);
