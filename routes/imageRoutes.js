const express = require('express');
const multer = require('multer');
const ImageController = require('../controllers/imageController');
const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname); // Store using original filename
    },
  });

  const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
      const allowedMimes = ['image/jpeg', 'image/png', 'image/gif'];
      if (allowedMimes.includes(file.mimetype)) {
        cb(null, true); // Allow the file
      } else {
        cb(new Error('Invalid file type. Only png, jpeg, and gif are allowed.'));
      }
    },
    limits: {
      fileSize: 1 * 1024 * 1024, // 1MB limit
    },
  });

router.post('/:user_id', upload.single('image'), ImageController.uploadImage);

module.exports = router;
