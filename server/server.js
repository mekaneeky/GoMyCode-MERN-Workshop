const express = require("express");
const Contact = require("./models/Contact");
const User = require("./models/User");
const app = express();
const port = 4000;
const bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy;
var session = require("express-session");

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({ secret: "keyboard cat" }));
app.use(passport.initialize());
app.use(passport.session());
// app.use(app.router);

passport.use(
  new LocalStrategy(function (username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: "Incorrect username." });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: "Incorrect password." });
      }
      return done(null, user);
    });
  })
);
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

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
});

app.post("/addcontact", function (req, res) {
  res.status(200);
  const contact = new Contact(req.body);

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
    successRedirect: "http://localhost:3000/",
    failureRedirect: "/shiiit",
    failureFlash: false,
  })
);
app.post("/signup", function (req, res) {
  res.status(200);
  const user = new User(req.body);

  console.log(user);
  user
    .save()

    .then((result) => {
      res.redirect("http://localhost:3000/");
      res.end();
    })
    .catch((err) => console.log(err));
});

app.listen(port, function () {
  console.log(
    "The server is running, " +
      " please, open your browser at http://localhost:%s",
    port
  );
});
