const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const passport = require("passport");

// GET: Signup form
router.get("/signup", authController.getSignupPage);

// POST: Signup form
router.post("/signup", authController.postSignup);

// GET: Login form
router.get("/login", authController.getLoginPage);

// POST: Login route (local strategy)
router.post("/login", authController.postLogin);;

module.exports = router;
