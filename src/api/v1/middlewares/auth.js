const jwt = require("jsonwebtoken");
const { JWT_CONFIG } = require("../../../config/config");
const createBaseResponse = require("../utils/baseResponse");
const ERROR_CODES = require("../common/error-codes");

exports.generateAccessToken = (user) => {
  return jwt.sign(
    { username: user.username, id: user._id },
    JWT_CONFIG.TOKEN_SECRET,
    { expiresIn: JWT_CONFIG.EXPIRES }
  );
};

exports.authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const language = req.headers["language"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null)
    return res
      .status(400)
      .json(
        createBaseResponse(true, undefined, ERROR_CODES.ERR_00010, language)
      );

  jwt.verify(token, JWT_CONFIG.TOKEN_SECRET, (err, user) => {
    if (err) {
      return res
        .status(400)
        .json(
          createBaseResponse(true, undefined, ERROR_CODES.ERR_00010, language)
        );
    }

    req.user = user;

    next();
  });
};
