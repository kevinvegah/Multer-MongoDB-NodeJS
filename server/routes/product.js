const express = require('express');

const app = express();

const { uploadImage } = require('../middlewares/multer');

const Controller = require('../controllers/product');

// ==========================
// Create a new product
// ==========================

app.post('/product', [uploadImage], Controller.postProduct);

// ==========================
// Get all products
// ==========================

app.get('/product', Controller.getAllProducts);

// ==========================
// Update a product
// ==========================

app.put('/product/:id', Controller.updateProduct);

module.exports = app;
