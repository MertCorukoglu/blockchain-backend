const UserService = require("../services/user");
const createBaseResponse = require("../utils/baseResponse");
const checkErrorCode = require("../utils/checkErrorCode");
const ERROR_CODES = require("../common/error-codes");

exports.getProfile = async (req, res, next) => {
  try {
    const user = await UserService.getUserById(req.user?.id)

    if (user) {
      res.status(200).json(createBaseResponse(false, user));
    } else {
      throw { code: ERROR_CODES.ERR_00041 };
    }
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
