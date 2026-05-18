import mongoose from 'mongoose';

const citySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    collection: 'cities',
  },
);

export default mongoose.model('City', citySchema);
