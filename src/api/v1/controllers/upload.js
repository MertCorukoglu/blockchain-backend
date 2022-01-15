const createBaseResponse = require("../utils/baseResponse");

exports.uploadImage = (req, res, next) => {
  res.status(200).json(createBaseResponse(false, { path: req.file.path }));
};
