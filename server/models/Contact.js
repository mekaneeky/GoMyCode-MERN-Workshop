const mongoose = require("mongoose");
const Schema = mongoose.Schema;
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
  name: String, // String is shorthand for {type: String}
  number: String,
  email: String,
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
