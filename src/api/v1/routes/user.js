const express = require("express");
const Router = express.Router();
const UserController = require("../controllers/user");
const AuthUtil = require("../middlewares/auth");

Router.post(
  "/getProfile",
  AuthUtil.authenticateToken,
  UserController.getProfile
);


module.exports = Router;
