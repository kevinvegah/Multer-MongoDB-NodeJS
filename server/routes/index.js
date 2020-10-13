const express = require('express');

const app = express();

//----------------------------
// Put here the routes import.
//----------------------------
app.use(require('./product'));

module.exports = app;
