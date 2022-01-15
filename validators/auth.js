const { check, validationResult } = require("express-validator");

exports.valdiateRegister = [
  check("username")
    .exists()
    .isString()
    .notEmpty()
    .isLength({ min: 6, max: 20 }),
  check("password")
    .exists()
    .isString()
    .notEmpty()
    .isLength({ min: 6, max: 20 })
];

exports.valdiateRegisterStatus = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: "Girdiğniz bilgileri kontrol ediniz" });
  } else {
    next();
  }
};

exports.validateLogin = [
  check("username")
    .exists()
    .isString()
    .notEmpty()
    .isLength({ min: 6, max: 20 }),
  check("password")
    .exists()
    .isString()
    .notEmpty()
    .isLength({ min: 6, max: 20 })
];

exports.valdiateLoginStatus = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: "Girdiğniz bilgileri kontrol ediniz" });
  } else {
    next();
  }
};


