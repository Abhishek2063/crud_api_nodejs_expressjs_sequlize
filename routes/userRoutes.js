const express = require('express');
const { body } = require('express-validator');
const UserController = require('../controllers/userController');
const validate = require('../middlewares/validate');
const router = express.Router();

router.post('/', [
    body('first_name').notEmpty().withMessage('First name is required').isLength({ max: 200 }).withMessage('First name should be at most 200 characters'),
    body('last_name').notEmpty().withMessage('Last name is required').isLength({ max: 200 }).withMessage('Last name should be at most 200 characters'),
    body('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email').isLength({ max: 200 }).withMessage('Email should be at most 200 characters'),
    body('username').notEmpty().withMessage('Username is required').isLength({ max: 200 }).withMessage('Username should be at most 200 characters'),
  ], validate, UserController.createUser);
  router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getUserById);

router.put('/:id', [
  body('first_name').optional().isLength({ max: 200 }).withMessage('First name should be at most 200 characters'),
  body('last_name').optional().isLength({ max: 200 }).withMessage('Last name should be at most 200 characters'),
  body('email').optional().isEmail().withMessage('Invalid email').isLength({ max: 200 }).withMessage('Email should be at most 200 characters'),
  body('username').optional().isLength({ max: 200 }).withMessage('Username should be at most 200 characters'),
], validate, UserController.updateUser);

router.delete('/:id', UserController.deleteUser);

module.exports = router;
