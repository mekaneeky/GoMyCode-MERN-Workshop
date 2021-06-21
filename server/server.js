const express = require("express");
const Contact = require("./models/Contact");
const User = require("./models/User");
const port = 4000;
const bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy;
var session = require("cookie-session");
const passoauth = require("./oAuth");
const app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(app.router);

app.use(
  session({
    maxAge: 24 * 60 * 60 * 1000,
    keys: ["keyboard cat"],
  })
);

app.use(passport.initialize());
app.use(passport.session());

const display_callback = (err, result) => {
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
  console.log("request.usre object : " + req.user);
});

app.post("/addcontact", function (req, res) {
  res.status(200);
  const contact = new Contact(req.body);
  // add email with contact
  contact
    .save()

    .then((result) => {
      res.redirect("http://localhost:3000/");
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

// OAUTH Config
app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

app.post("/signup", function (req, res) {
  res.status(200);

  User.findOne({ email: req.body.email }).then((currentUser) => {
    if (currentUser) {
      // already have the user
      res.redirect("http://localhost:3000/login");
      // res.send(`user already created : ${currentUser}`);
    } else {
      // if not create user in db
      User.create(req.body, (err, newUser) => {
        if (err) console.log(err);
        // saved!
        console.log(" \n new user created: " + newUser);
        res.redirect("http://localhost:3000/login");
      });
    }
  });
});

app.listen(port, function () {
  console.log(
    "The server is running, " +
      " please, open your browser at http://localhost:%s",
    port
  );
});
