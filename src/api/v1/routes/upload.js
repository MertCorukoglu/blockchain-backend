const express = require("express");
const Router = express.Router();
const AuthUtil = require("../middlewares/auth");
const UploadController = require("../controllers/upload");
const uploadFile = require("../utils/uploadUtil");
const { PATHS } = require("../common/common");

Router.post(
  "/",
  AuthUtil.authenticateToken,
  uploadFile(PATHS.POST).single("postImage"),
  UploadController.uploadImage
);

module.exports = Router;
