const mongoose = require('mongoose');

const { Schema } = mongoose;

// ============================
// Model of products
// ============================
const productSchema = new Schema({
  name: {
    type: String,
    required: [true, 'The name is necessary'],
  },
  img: {
    type: String,
    default: null,
    required: [true, 'The image is necessary'],
  },
});

// 'Product' contain the configuration of productSchema
module.exports = mongoose.model('Product', productSchema);
