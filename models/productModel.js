const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
      trim: true,
    },
    code: {
      type: String,
      required: [false, 'Please add a code'],
      trim: true,
    },
    category: {
      type: String,
      required: [true, 'Please add a category'],
      trim: true,
    },
    quantity: {
      type: String,
      required: [true, 'Please add a quantity'],
      trim: true,
    },
    hold_quantity: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: String,
      required: [true, 'Please add a price'],
      trim: true,
    },
    purchase_price: {
      type: String,
      required: [false, 'Please add a p_price'],
      trim: true,
    },
    description: {
      type: String,
      required: [false, 'Please add a description'],
      trim: true,
    },
    image: {
      type: Object,
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
