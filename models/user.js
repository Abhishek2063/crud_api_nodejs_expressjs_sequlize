'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    first_name: DataTypes.STRING(200),
    last_name: DataTypes.STRING(200),
    email: {
      type: DataTypes.STRING(200),
      unique: true,
    },
    username: {
      type: DataTypes.STRING(200),
      unique: true,
    },
  }, {
    sequelize,
    modelName: 'User',
    tableName:"user_details",
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return User;
};