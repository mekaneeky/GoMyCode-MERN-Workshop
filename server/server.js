const express = require("express");
const Contact = require("./models/Contact");
const app = express();
const port = 4000;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

display_callback = (err, result) => {
  if (err) {
    throw err;
  }
  console.log("result: " + result);
};

app.get("/", function (req, res) {
  res.status(200);
  res.set("Content-type", "text/json");
  Contact.find({}).then((users) => {
    // <-- Update to your call of choice.
    //oki

    res.send(users);
  });
});

app.post("/", function (req, res) {
  res.status(200);
  const contact = new Contact(req.body);
  contact
    .save()
    .then((result) => {
      res.send(result);
      res.end();
    })
    .catch((err) => console.log(err));
});

app.delete("/:userId", function (req, res) {
  res.status(200);
  res.set("Content-type", "text/html");
  Contact.findByIdAndRemove(req.params.userId).exec(function (err, result) {
    display_callback(err, result);
    res.status(200);
    res.end();
  });
});

app.put("/:userId", function (req, res) {
  Contact.findOneAndUpdate({ _id: req.params.userId }, req.body, {
    new: true,
  }).exec();
});
app.listen(port, function () {
  console.log(
    "The server is running, " +
      " please, open your browser at http://localhost:%s",
    port
  );
});
