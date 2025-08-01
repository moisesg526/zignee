const User = require("../models/User");
const Package = require("../models/Package");
const { delimiter } = require("ejs");

function ensureAuth(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/user/login");
}

module.exports = {
  ensureAuth,

  getDashboard: async (req, res) => {
    try {
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const today = new Date();
      const currentMonth = monthNames[today.getMonth()];
      const currentDate = today.getDate();
      const currentYear = today.getFullYear();

      const packages = await Package.find({ userId: req.user._id });

      res.render("customerDashboard.ejs", {
        currentMonth,
        currentDate,
        currentYear,
        name: req.user.name,
        packages,
      });
    } catch (err) {
      console.error(err);
      res.status(500).send("Server Error");
    }
  },
  addPackage: async (req, res) => {
    try {
      const { trackingNum, address, deliveryLocation, signature } = req.body;

      await Package.create({
        trackingNum,
        address,
        deliveryLocation,
        signature,
        completed: false,
        userId: req.user._id,
      });

      console.log("Package created:", {
        trackingNum,
        address,
        deliveryLocation,
        signature,
      });
      res.redirect("/dashboard");
    } catch (err) {
      console.log("Package validation error:", err);
      res.status(400).send("Package validation error");
    }
  },

  getPackage: async (req, res) => {
    try {
      res.render("customerDashboard.ejs", {
        trackingNum: trackingNum,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
