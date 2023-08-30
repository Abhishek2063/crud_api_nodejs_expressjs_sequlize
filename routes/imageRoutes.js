const express = require('express');
const multer = require('multer');
const ImageController = require('../controllers/imageController');
const router = express.Router();
const upload = require('../middlewares/uploadMiddleware');

router.post('/:user_id', upload.single('image'), ImageController.uploadImage);

module.exports = router;
