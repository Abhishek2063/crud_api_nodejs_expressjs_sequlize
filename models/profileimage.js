'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProfileImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProfileImage.belongsTo(models.User, { foreignKey: 'user_id' });
    }
  }
  ProfileImage.init({
    user_id: DataTypes.INTEGER,
    profilePic: DataTypes.STRING(200),
  }, {
    sequelize,
    modelName: 'ProfileImage',
    tableName:"profile_image_details",
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return ProfileImage;
};