const passport = require("passport");
const User = require("../models/User");
const validator = require("validator");

module.exports = {
  getLogin: (req, res) => {
    if (req.user) {
      return res.redirect("/dashboard");
    }
    res.render("login", {
      title: "Login",
    });
  },

  postLogin: (req, res, next) => {
    const validationErrors = [];
    if (validator.isEmpty(req.body.password))
      validationErrors.push({ msg: "Password cannot be blank." });

    if (validationErrors.length) {
      console.log("errors", validationErrors);
      return res.redirect("/user/login");
    }
    passport.authenticate("local", (err, user, info) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        console.log("Login failed:", info?.message);
        return res.redirect("/user/login");
      }
      req.logIn(user, (err) => {
        if (err) {
          return next(err);
        }
        console.log("success", { msg: "Success! You are logged in." });
        res.redirect(req.session.returnTo || "/dashboard");
      });
    })(req, res, next);
  },

  getSignupPage: (req, res) => {
    res.render("signup");
  },

  logout: (req, res, next) => {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }

      req.session.destroy(function (err) {
        if (err) {
          console.log(
            "Error: Failed to destroy the session during logout.",
            err
          );
        }
        console.log("User has logged out.");
        res.redirect("/");
      });
    });
  },

  postSignup: async (req, res, next) => {
    const { name, username, password, customerOrCarrier } = req.body;
    try {
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).send("User already exists");
      }
      const newUser = new User({
        name,
        username,
        password: req.body.password,
        customerOrCarrier,
      });
      await newUser.save();
      req.logIn(newUser, (err) => {
        if (err) return next(err);
        return res.redirect("/dashboard");
      });
    } catch (err) {
      console.log(err);
      res.status(500).send("Error signing up user");
    }
  },
};
