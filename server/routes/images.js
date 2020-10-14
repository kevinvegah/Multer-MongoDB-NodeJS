const express = require('express');

const app = express();

const Controller = require('../controllers/images');
// ============================
// Get and show image
// ============================
app.get('/image/:img', Controller.getAndShowImage);

module.exports = app;
