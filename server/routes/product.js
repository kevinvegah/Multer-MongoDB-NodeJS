const express = require('express');

const app = express();

const { uploadImage } = require('../middlewares/multer');

const Controller = require('../controllers/product');

// ==========================
// Create a new product
// ==========================

app.post('/product', [uploadImage], Controller.postProduct);

module.exports = app;
