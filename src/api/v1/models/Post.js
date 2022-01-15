const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Post = new Schema({
  userId: {
    type: ObjectId,
    required: true
  },
  categoryId: {
    type: ObjectId,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  createOn: {
    type: Date,
    default: Date.now()
  },
  image: {
    type: String
  },
  publishDate: Date

});




module.exports=mongoose.model('Post',Post);