// OAUTH Config
const router = require("express").Router();
const passport = require("passport");
const User = require("../models/User");
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "http://localhost:3000/",
    failureRedirect: "http://localhost:3000/login",
  })
);

router.post("/signup", function (req, res) {
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

module.exports = router;
