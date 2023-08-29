const path = require('path');
const ImageService = require('../services/imageService');
const ResponseHandler = require('../helpers/responseHandler');

class ImageController {
  static async uploadImage(req, res) {
    try {
      if (!req.file) {
        return ResponseHandler.sendErrorResponse(res, 400, 'No file was uploaded.');
      }

      const { user_id } = req.params;
      const imageUrl = await ImageService.uploadImage(user_id, req.file);

      return ResponseHandler.sendSuccessResponse(res, imageUrl);
    } catch (error) {
      return ResponseHandler.sendErrorResponse(res, 500, error.message);
    }
  }
}

module.exports = ImageController;
