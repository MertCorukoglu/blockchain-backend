const { check, validationResult } = require("express-validator");
const createBaseResponse = require("../utils/baseResponse");
const ERROR_CODES = require("../common/error-codes");

exports.valdiateRegister = [
  check("username")
    .exists()
    .isString()
    .notEmpty()
    .isLength({ min: 6, max: 30 }),
  check("email").exists().isEmail().notEmpty().isLength({ min: 6, max: 30 }),
  check("name").exists().isString().notEmpty(),
  check("surname").exists().isString().notEmpty(),
  check("password")
    .exists()
    .isString()
    .notEmpty()
    .isLength({ min: 8, max: 30 }),
];

exports.valdiateRegisterStatus = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json(
        createBaseResponse(
          true,
          undefined,
          ERROR_CODES.ERR_00030,
          req.headers["language"]
        )
      );
  } else {
    next();
  }
};

exports.validateLogin = [
  check("email")
    .exists()
    .isEmail()
    .notEmpty()
    .isLength({ min: 6, max: 20 }),
  check("password")
    .exists()
    .isString()
    .notEmpty()
    .isLength({ min: 6, max: 20 }),
];

exports.valdiateLoginStatus = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json(
        createBaseResponse(
          true,
          undefined,
          ERROR_CODES.ERR_00030,
          req.headers["language"]
        )
      );
  } else {
    next();
  }
};
