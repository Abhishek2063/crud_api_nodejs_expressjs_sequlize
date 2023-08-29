const { validationResult } = require('express-validator');
const UserService = require('../services/userService');
const ResponseHandler = require('../helpers/responseHandler');

class UserController {
  // function to create the user
  static async createUser(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return ResponseHandler.sendErrorResponse(res, 400, errors.array());
    }

    try {
      const user = await UserService.createUser(req.body);
      return ResponseHandler.sendSuccessResponse(res, user);
    } catch (error) {
      return ResponseHandler.sendErrorResponse(res, 500, error.message);
    }
  }

  // get all users data
  static async getAllUsers(req, res) {
    try {
      const users = await UserService.getAllUsers();
      return ResponseHandler.sendSuccessResponse(res, users);
    } catch (error) {
      return ResponseHandler.sendErrorResponse(res, 500, error.message);
    }
  }

  //  get user data by id
  static async getUserById(req, res) {
    try {
      const user = await UserService.getUserById(req.params.id);
      if (!user) {
        return ResponseHandler.sendNotFoundResponse(res, 'User not found');
      }
      return ResponseHandler.sendSuccessResponse(res, user);
    } catch (error) {
      return ResponseHandler.sendErrorResponse(res, 500, error.message);
    }
  }

  // update the user by user id
  static async updateUser(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return ResponseHandler.sendErrorResponse(res, 400, errors.array());
    }

    try {
      const updatedUser = await UserService.updateUser(req.params.id, req.body);
      if (!updatedUser) {
        return ResponseHandler.sendNotFoundResponse(res, 'User not found');
      }
      return ResponseHandler.sendSuccessResponse(res, updatedUser);
    } catch (error) {
      return ResponseHandler.sendErrorResponse(res, 500, error.message);
    }
  }

  // delete user
  static async deleteUser(req, res) {
    try {
      const deletedUser = await UserService.deleteUser(req.params.id);
      if (!deletedUser) {
        return ResponseHandler.sendNotFoundResponse(res, 'User not found');
      }
      return ResponseHandler.sendSuccessResponse(res, "User delete success.");
    } catch (error) {
      return ResponseHandler.sendErrorResponse(res, 500, error.message);
    }
  }

}

module.exports = UserController;
