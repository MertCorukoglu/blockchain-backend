const UserModel = require("../models/User");

exports.getUserByUsername = (username) => {
    return UserModel.findOne({ username: username });
}
exports.getUserById = (id) => {
    return UserModel.findById(id);
}
exports.createUser = (values) => {
   return UserModel.create(values);
}