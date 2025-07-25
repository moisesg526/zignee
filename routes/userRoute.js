const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// GET: Signup form
router.get("/signup", authController.getSignupPage);

// POST: Signup form
router.post("/signup", authController.postSignup);

// GET: Login form
router.get("/login", authController.getLogin);

// POST: Login route (local strategy)
router.post("/login", authController.postLogin);

module.exports = router;
