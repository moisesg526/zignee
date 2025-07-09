const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboardController");
const authController = require("../controllers/authController");

router.get("/", dashboardController.getDashboard);
router.post("/addPackage", dashboardController.addPackage);
router.get("/logout", authController.logout);

module.exports = router;
