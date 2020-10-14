const _ = require('underscore');
const Product = require('../models/product');

// ============================
// Create a product
// ============================
const postProduct = (req, res) => {
  const { body, file } = req;

  const product = new Product({
    name: body.name,
    img: file,
  });
  product.save((err, productDB) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }
    // if the product is not created
    if (!productDB) {
      return res.status(400).json({
        ok: false,
        err,
      });
    }
    return res.json({
      ok: true,
      product: productDB,
    });
  });
};

// ==========================
// Get products
// ==========================
const getAllProducts = (req, res) => {
  Product.find({}) // -> Filter information
    .sort('name') // -> Defines the order in which the products will appear
    .exec(async (err, productDB) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err,
        });
      }

      // Count the number of products with the condition.
      const count = await Product.countDocuments({}).catch((error) => {
        return res.status(500).json({
          ok: false,
          error,
        });
      });

      return res.json({
        ok: true,
        many: count,
        productDB,
      });
    });
};

// ==========================
// Update a product
// ==========================
const updateProduct = (req, res) => {
  const { id } = req.params;

  const body = _.pick(req.body, ['name']); // Fields can be updated

  Product.findByIdAndUpdate(
    id,
    body,
    { new: true, useFindAndModify: false },
    (err, productDB) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err,
        });
      }

      if (!productDB) {
        return res.status(400).json({
          ok: false,
          err: {
            message: 'Id product no found.',
          },
        });
      }

      return res.json({
        ok: true,
        product: productDB,
      });
    }
  );
};

module.exports = {
  postProduct,
  getAllProducts,
  updateProduct,
};
