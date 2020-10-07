const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: path.resolve(__dirname, "../../uploads/img"),
  filename: function (req, file, cb) {
    const fileName = "IMAGE-" + Date.now() + path.extname(file.originalname);
    cb(null, fileName);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
}).single("img"); // <-- file name to upload the image.

module.exports = { upload };
