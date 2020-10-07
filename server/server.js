require("./config/config");

const express = require("express");
const mongoose = require("mongoose");

const app = express();

const bodyParser = require("body-parser"); // allows us set data.

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Global route configuration
app.use(require("./routes/index"));

// DB Connection
mongoose.connect(
  process.env.URLDB, // comes from config.js
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
  (err, res) => {
    if (err) {
      throw err;
    }
    console.log("ONLINE database");
  }
);

app.listen(process.env.PORT, () =>
  console.log(`Listening to the port`, process.env.PORT)
);
