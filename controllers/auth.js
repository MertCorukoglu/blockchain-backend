const UserModel = require("../models/user");
const AuthUtil = require("../utils/auth");
const bcrypt = require("bcrypt");
const createBaseResponse = require("../utils/baseResponse");


exports.login = async (req, res, next) => {
  try {
    const user = await UserModel.findOne({ username: req.body.username });
    if (user) {
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (validPassword) {
        const token = AuthUtil.generateAccessToken(user);

        res.status(200).json(createBaseResponse(false, { token: token }));
      } else {
        throw { message: "Kullanıcı adı veya şifre yanlış." };
      }
    } else {
      throw { message: "Kullanıcı adı veya şifre yanlış." };
    }
  } catch (error) {
    res.status(400).json(createBaseResponse(true, undefined, error.message));
  }
};

exports.register = async (req, res, next) => {
  try {
    const body = req.body;

    const user = new UserModel(body);

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(user.password, salt);

    await UserModel.create(user);
    res.status(200).json(createBaseResponse(false, "Kullanıcı oluşturuldu."))
  } catch (error) {
    res.status(400).json(createBaseResponse(true, undefined, error.message));
  }
};
