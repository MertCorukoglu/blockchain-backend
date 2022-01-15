const bcrypt = require("bcrypt");
const UserService = require("../services/user");
const UserModel = require("../models/User");
const AuthUtil = require("../middlewares/auth");
const createBaseResponse = require("../utils/baseResponse");
const checkErrorCode = require("../utils/checkErrorCode");
const ERROR_CODES = require("../common/error-codes");

exports.login = async (req, res, next) => {
  try {
    const user = await UserService.getUserByUsername(req.body.username);
    if (user) {
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (validPassword) {
        const token = AuthUtil.generateAccessToken(user);

        res.status(200).json(createBaseResponse(false, { token: token }));
      } else {
        throw { code: ERROR_CODES.ERR_00040 };
      }
    } else {
      throw { code: ERROR_CODES.ERR_00040 };
    }
  } catch (error) {
    res.status(400).json(createBaseResponse(true, undefined, checkErrorCode(error), req.headers["language"]));
  }
};

exports.register = async (req, res, next) => {
  try {
    const body = req.body;

    const user = new UserModel(body);

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(user.password, salt);

    await UserService.createUser(user);
    res.status(200).json(createBaseResponse(false, "Kullanıcı oluşturuldu."));
  } catch (error) {
    res.status(400).json(createBaseResponse(true, undefined, checkErrorCode(error), req.headers["language"]));
  }
};
