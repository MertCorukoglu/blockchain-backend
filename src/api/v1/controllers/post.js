const PostModel = require("../models/Post");
const createBaseResponse = require("../utils/baseResponse");
const checkErrorCode = require("../utils/checkErrorCode");
const ERROR_CODES = require("../common/error-codes");

exports.getPosts = async (req, res, next) => {
  try {
    const posts = await PostModel.find();
    res.status(200).json(createBaseResponse(false, posts));
  } catch (error) {
    res
      .status(400)
      .json(
        createBaseResponse(
          true,
          undefined,
          checkErrorCode(error),
          req.headers["language"]
        )
      );
  }
};
