class ResponseHandler {
    static sendSuccessResponse(res, data) {
      res.status(200).json({
        success: true,
        data,
      });
    }
  
    static sendNotFoundResponse(res, message) {
      res.status(404).json({
        success: false,
        error: message,
      });
    }
  
    static sendErrorResponse(res, statusCode, message) {
      res.status(statusCode).json({
        success: false,
        error: message,
      });
    }
  }
  
  module.exports = ResponseHandler;
  