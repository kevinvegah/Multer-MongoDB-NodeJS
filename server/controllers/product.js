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

module.exports = {
  postProduct,
};
