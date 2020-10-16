const fs = require('fs-extra'); // File system
const path = require('path');

// ==========================
// Get and show image
// ==========================

const getAndShowImage = (req, res) => {
  const { img } = req.params;

  const pathImage = path.resolve(__dirname, `../../uploads/img/${img}`);

  if (fs.existsSync(pathImage)) {
    return res.sendFile(pathImage); // Show the image using the path
  }
  const noImagePath = path.resolve(__dirname, '../assets/no-image.jpg');
  return res.sendFile(noImagePath);
};

module.exports = {
  getAndShowImage,
};
