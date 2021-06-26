const express = require("express");
const port = 4000;
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth-routes");
const Contact = require("./models/Contact");
const User = require("./models/User");
const bodyParser = require("body-parser");

const cors = require("cors");

const passport = require("passport");
const passportSetup = require("./passport-setup");
// const session = require("cookie-session");
const expressSession = require("express-session");

const app = express();
//  mongoose config

mongoose.connect(
  "mongodb+srv://mern-app:mern1234@cluster0.ikppq.mongodb.net/mern-contact?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err, suc) {
    if (err) {
      console.log("error: " + err);
    }
    console.log(
      "open done: " + mongoose.connection.host + "\t" + mongoose.connection.port
    );
  }
);
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

// app.use(app.router);

app.use(
  cors({
    origin: "http://localhost:3000", // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // allow session cookie from browser to pass through
  })
);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(
  expressSession({
    secret: ["keyboard cat"],
    resave: true,
    saveUninitialized: true,
    secure: false,
    maxAge: 86400000, // 1 day in milliseconds
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(authRoutes);

const display_callback = (err, result) => {
  if (err) {
    throw err;
  }
  console.log("result: " + result);
};

app.use((req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect("http://localhost:3000/login");
  }
});

app.get("/", function (req, res) {
  console.log(req.isAuthenticated());
  console.log(req.session);

  Contact.find({ userId: req.user._id }).then((contactsInfo) => {
    res.set("Content-type", "text/json");
    res.status(200);

    res.send(contactsInfo);
  });
});

// Add New Contact
app.post("/addcontact", function (req, res) {
  // add email with contact

  // res.set("Content-type", "text/json");

  let newUser = { ...req.body, userId: req.user._id };

  Contact.create(newUser)

    .then((result) => {
      res.redirect("http://localhost:3000/");
      res.status(200);
      res.end();
    })
    .catch((err) => console.log(err + "\n"));
});

// Delete Contact

app.delete("/:userId", function (req, res) {
  res.status(200);
  res.set("Content-type", "text/html");
  console.log("logged in user: " + req.user);

  Contact.findByIdAndRemove(req.params.userId).exec(function (err, result) {
    display_callback(err, result);
    res.status(200);
    res.end();
  });
});

app.put("/:contactId", function (req, res) {
  Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body).exec(
    function (err, updated) {
      if (err) console.log(err);
      console.log(req.user);
      res.redirect("http://localhost:3000");
      res.end();
    }
  );
});

app.listen(port, function (err, suc) {
  if (err) console.log(err);
  console.log(
    "The server is running, " +
      " please, open your browser at http://localhost:%s",
    port
  );
});
