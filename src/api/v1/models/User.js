const mongoose = require("mongoose");
const { ACTIVE_STATUSSES } = require("../common/common");
const REGEXES = require("../common/regex");
const Schema = mongoose.Schema;

const User = new Schema({
  username: {
    type: String,
    required: true,
    maxlength: 30,
    minlength: 6,
    match: REGEXES.USERNAME,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: REGEXES.EMAIL,
  },
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    match: REGEXES.PASSWORD,
  },
  activeStatus: ACTIVE_STATUSSES,
});

module.exports = mongoose.model("User", User);
