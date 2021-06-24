const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const contactSchema = new Schema({
  username: String,
  phone: String,
  email: String,
  userId: String,
});

contactSchema.plugin(passportLocalMongoose);
const Contact = mongoose.model("contact", contactSchema);

module.exports = Contact;
