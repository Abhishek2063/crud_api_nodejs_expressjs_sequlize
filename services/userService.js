const { User } = require('../models');
const ResponseHandler = require('../helpers/responseHandler');

class UserService {
  // create user services
  static async createUser(userData) {
    try {
      const user = await User.create(userData);
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  // get all user data services
  static async getAllUsers() {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  // get user data by id
  static async getUserById(userId) {
    try {
      const user = await User.findByPk(userId);
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  // update user data by user id servces
  static async updateUser(userId, userData) {
    console.log(userId)
    try {
      if (Object.keys(userData).length === 0) {
        throw new Error('No data provided for update');
      }

      const user = await User.findByPk(userId);

      if (!user) {
        return null;
      }

      // Merge the existing user data with the new data
      const updatedUserData = { ...user.dataValues, ...userData };

      const [rowsUpdated] = await User.update(updatedUserData, {
        where: { id: userId },
      });

      if (rowsUpdated === 0) {
        return null;
      }

      // Fetch the updated user data
      const updatedUser = await User.findByPk(userId);

      return updatedUser;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  // delete user
  static async deleteUser(userId) {
    try {
      const user = await User.findByPk(userId);

      if (!user) {
        return null;
      }

      const deletedUser = user.toJSON();

      await user.destroy();

      return deletedUser;
    } catch (error) {
      throw new Error(error.message);
    }
  }

}

module.exports = UserService;
