var passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy;
const User = require("./models/User");

passport.serializeUser(function (user, done) {
  console.log("msg from serialize" + user);

  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    console.log("msg from deserialize" + user);
    done(err, user);
  });
});

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

module.exports = passport;
