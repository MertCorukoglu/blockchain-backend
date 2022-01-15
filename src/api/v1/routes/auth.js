const express = require("express");
const Router = express.Router();
const AuthController = require("../controllers/auth");
const AuthValidator = require("../validators/auth");

Router.post(
  "/login",
  AuthValidator.validateLogin,
  AuthValidator.valdiateLoginStatus,
  AuthController.login
);
Router.post(
  "/register",
  AuthValidator.valdiateRegister,
  AuthValidator.valdiateRegisterStatus,
  AuthController.register
);

module.exports = Router;
