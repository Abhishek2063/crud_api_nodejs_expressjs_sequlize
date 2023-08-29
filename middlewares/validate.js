const { validationResult } = require('express-validator');
const ResponseHandler = require('../helpers/responseHandler');

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return ResponseHandler.sendErrorResponse(res, 400, errors.array());
  }
  next();
};

module.exports = validate;
