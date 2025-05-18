const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.login);
router.get("/signup", userController.signup)

module.exports = router;
