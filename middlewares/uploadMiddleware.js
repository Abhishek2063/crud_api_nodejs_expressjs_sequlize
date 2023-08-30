const multer = require('multer');

// Set up multer storage and file name configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    // const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    // const extension = file.originalname.split('.').pop();
    cb(null, `${file.originalname}`);
  },
});

// Filter for allowed file types
const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
//   const maxSize = 1 * 1024 * 1024; // 1MB
  if (!allowedFileTypes.includes(file.mimetype)) {
    return cb(new Error('Invalid file type'));
  }
  // if (file.size > maxSize) {
  //   return cb(new Error('File size exceeds the limit'));
  // }

  cb(null, true);
};
const maxSize = 1 * 1024 * 1024; // 1MB

// Create multer upload middleware
const upload = multer({ storage, fileFilter, limits: { fileSize: maxSize } });

module.exports = upload;
