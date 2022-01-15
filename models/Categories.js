const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Categories = new Schema({
  id: ObjectId,
  Title: String,
  Description: String,
  CreateOn: Date.now(),
});




module.exports=mongoose.model('Categories',Categories);