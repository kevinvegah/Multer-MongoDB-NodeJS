const path = require('path'); // using to work with file paths
const multer = require('multer');

const storage = multer.diskStorage({
  // destination - the file directory path is defined
  destination: path.resolve(__dirname, '../../uploads/img'),
  // filename - this funtion allows you to customize the file name
  filename: (req, file, cb) => {
    const fileName = `IMAGE-${Date.now()}${path.extname(file.originalname)}`;
    cb(null, fileName);
  },
});

// this function allows us to validate the file extension
const fileFilter = (req, file, cb) => {
  const filetypes = /jpeg|jpg|png/;
  const mimetype = filetypes.test(file.mimetype);
  // path.extname is used to get the file extension
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

  if (mimetype && extname) {
    return cb(null, true);
  }
  return cb(
    new Error(
      `Error: File upload only supports the following filetypes - ${filetypes}`
    )
  );
};

// this function is the middleware function of multer
const upload = multer({
  storage, // define a storage location for our files
  limits: { fileSize: 1000000 }, // this is the file size limit
  fileFilter,
}).single('img'); // <-- file name to upload the file.

// This is a middleware function to validate errors and upload files
const uploadImage = async (req, res, next) => {
  try {
    const fileSaved = await new Promise((resolve, reject) => {
      upload(req, res, (err) => {
        const { file } = req;

        if (err instanceof multer.MulterError) {
          // A Multer error occurred when uploading.
          const error = { rqStatus: 400, err };
          reject(error);
        } else if (err) {
          // An unknown error occurred when uploading.
          const error = { rqStatus: 400, err };
          reject(error);
        }

        if (!file) {
          // An error occurred when the file is not uploaded
          const error = {
            rqStatus: 400,
            err: { message: 'file not uploaded.' },
          };
          reject(error);
        }

        if (file) {
          resolve(file.filename);
        }
      });
    });
    req.file = fileSaved; // set file in the request to the next step
    next();
  } catch (error) {
    const { rqStatus, err } = error;
    res.status(rqStatus).json({
      ok: false,
      message: err.message,
    });
  }
};
module.exports = { upload, uploadImage };
