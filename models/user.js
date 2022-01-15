const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
  id: ObjectId,
  Username: String,
  Email: String,
  Password: String,
  isActive: Boolean,
  isAdmin: Boolean,
  CreateOn: Date.now()
});


module.exports=mongoose.model('User',User);


