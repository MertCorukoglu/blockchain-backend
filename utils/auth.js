const jwt = require("jsonwebtoken");
const { JWT_CONFIG } = require("../config/config");

exports.generateAccessToken = (user) => {
  return jwt.sign(
    { username: user.username, id: user._id },
    JWT_CONFIG.TOKEN_SECRET,
    { expiresIn: JWT_CONFIG.EXPIRES }
  );
};

exports.authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, JWT_CONFIG.TOKEN_SECRET, (err, user) => {
    console.log(err);

    if (err) {
      return res.sendStatus(403);
    }

    req.user = user;

    next();
  });
};
