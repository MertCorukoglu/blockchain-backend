const express = require("express");
const Router = express.Router();
const AuthUtil = require("../middlewares/auth");
const PostController = require("../controllers/post")


Router.post(
  "/getPosts",
  AuthUtil.authenticateToken,
  PostController.getPosts
)

module.exports = Router;
