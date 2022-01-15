const mongoose = require("mongoose");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Category = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  createTime: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Category", Category);
