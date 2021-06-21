const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
});
userSchema.methods.validPassword = function (pwd) {
  // EXAMPLE CODE!
  return this.password === pwd;
};
const User = mongoose.model("User", userSchema);

module.exports = User;
