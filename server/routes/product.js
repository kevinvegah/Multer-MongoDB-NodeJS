const express = require('express');

const app = express();

const { uploadImage } = require('../middlewares/multer');

const Controller = require('../controllers/product');

// ==========================
// Create product
// ==========================

app.post('/product', [uploadImage], Controller.postProduct);

// ==========================
// Get all products
// ==========================

app.get('/product', Controller.getAllProducts);

// ==========================
// Update product
// ==========================

app.put('/product/:id', Controller.updateProduct);

// ==========================
// Delete product
// ==========================

app.delete('/product/:id', Controller.deleteProduct);

module.exports = app;
