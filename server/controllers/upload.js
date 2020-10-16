const fs = require('fs-extra'); // File system
const path = require('path');

const Product = require('../models/product');

const deleteFile = (fileName) => {
  // Path to the existing image in the uploads folder
  const pathImage = path.resolve(__dirname, `../../uploads/img/${fileName}`);

  // Delete the existing image in the uploads folder
  if (fs.existsSync(pathImage)) {
    fs.unlinkSync(pathImage);
  }
};

// ==========================
// Upload image by Id
// ==========================

const uploadImageById = (req, res) => {
  const { file } = req;
  const { id } = req.params;
  Product.findById(id, (err, productFound) => {
    const productDB = productFound;
    if (err) {
      // Nota: even if an error occurs, the image is uploaded. deleteFile is the solution
      deleteFile(file); // --> Delete the image just uploaded
      return res.status(500).json({
        ok: false,
        err,
      });
    }
    // If there is no product
    if (!productDB) {
      deleteFile(file); // --> Delete the image just uploaded
      return res.status(400).json({
        ok: false,
        err: {
          message: 'Product not found.',
        },
      });
    }
    deleteFile(productDB.img);

    // productDB.img.push(fileName); // <-- if the img field is an array
    productDB.img = file;
    return productDB.save((error, productSaved) => {
      if (error) {
        return res.status(500).json({
          ok: false,
          error,
        });
      }
      return res.json({
        ok: true,
        product: productSaved,
        img: file,
      });
    });
  });
};

module.exports = { uploadImageById, deleteFile };
