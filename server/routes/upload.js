const express = require('express');

const app = express();

const { uploadImage } = require('../middlewares/multer');

const Controller = require('../controllers/upload');

// ==========================
// Upload image by Id
// ==========================

app.post('/image/product/:id', [uploadImage], Controller.uploadImageById);

module.exports = app;
