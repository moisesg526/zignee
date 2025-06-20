const passport = require("passport");
const User = require("../models/User");
const bcrypt = require("bcrypt");

module.exports = {
  getLoginPage: (req, res) => {
    res.render("login");
  },

  postLogin: (req, res, next) => {
    passport.authenticate("local", (err, user) => {
      if (err) return next(err);
      if (!user) return res.redirect("/user/login");

      req.logIn(user, (err) => {
        if (err) return next(err);
        return res.redirect("/dashboard");
      });
    })(req, res, next);
  },

  getSignupPage: (req, res) => {
    res.render("signup");
  },

  logoutUser: (req, res) => {
    req.logout(() => {
      res.redirect("/");
    });
  },

  postSignup: async (req, res) => {
    const { username, password, customerOrCarrier } = req.body;
    try {
      // Check if user already exists
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).send("User already exists");
      }

      // Password gets hashed for better security
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create new user
      const newUser = new User({
        username,
        password: hashedPassword,
        customerOrCarrier,
      });
      await newUser.save();

      res.redirect("/login");
    } catch (err) {
      console.log(err);
      res.status(500).send("Error signing up user");
    }
  },
};
