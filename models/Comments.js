const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Comments = new Schema({
  id: ObjectId,
  UserId: ObjectId,
  NewsId: ObjectId,
  Text: String,
  CreateOn: Date.now(),
});

module.exports = mongoose.model("Comments", Comments);
