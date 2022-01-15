const mongoose = require("mongoose");
const User = require("./user");
const Category = require("./Categories");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const News = new Schema({
  id: ObjectId,
  UserId:ObjectId,
  CategoryId:ObjectId,
  Title: String,
  Text: String,
  CreateOn: Date.now(),



});
//User.plugin(uniqueValidator, {message: 'is already taken.'});



module.exports=mongoose.model('News',News);
