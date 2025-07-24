const User = require("../models/User");
const Package = require("../models/Package");

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

      res.render("customerDashboard.ejs", {
        currentMonth,
        currentDate,
        currentYear,
        name: req.user.name,
      });
    } catch (err) {
      console.error(err);
      res.status(500).send("Server Error");
    }
  },
  addPackage: async (req, res) => {
    const { trackingNum, address, deliveryLocation, signature, completed } =
      req.body;
    try {
      const existingPackage = await Package.findOne({ trackingNum });
      if (existingPackage) {
        return res.status(400).send("Package already exists");
      }
      const newPackage = new Package({
        trackingNum,
        address,
        deliveryLocation,
        signature,
      });
      await new Package.save();
    } catch (err) {
      console.error(err);
    }
  },
};
