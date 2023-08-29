const { ProfileImage, User } = require('../models');
const path = require('path');

const ResponseHandler = require('../helpers/responseHandler');

class ImageService {
  static async uploadImage(user_id, uploadedFile) {
    try {
      const user = await User.findByPk(user_id);

      if (!user) {
        return ResponseHandler.sendNotFoundResponse(res, 'User not found');
      }

      const imageName = uploadedFile.filename;
      const imagePath = path.join('uploads', imageName);

      const image = await ProfileImage.create({ profile_pic: imageName, user_id });

      return image; // You can return the image URL for viewing
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = ImageService;
