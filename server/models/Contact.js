const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

require("dotenv").config();

mongoose.connect(
  "mongodb+srv://mern-app:mern1234@cluster0.ikppq.mongodb.net/mern-contact?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (error) {
    console.log(
      "open done" + mongoose.connection.host + "\t" + mongoose.connection.port
    );
    if (error) {
      console.log("error" + error);
    }
  }
);

mongoose.set("useFindAndModify", false);

const contactSchema = new Schema({
  name: String,
  phone: String,
  email: String,
});

contactSchema.plugin(passportLocalMongoose);
const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
