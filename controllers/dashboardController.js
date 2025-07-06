const User = require("../models/User");
const Package = require("../models/Package");

module.exports = {
  addPackage: async (req, res) => {
    
  },
  getDashboard: async (req, res) => {
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
    const currentMonth = monthNames[new Date().getMonth()];
    res.render("customerDashboard.ejs", { currentMonth });
  },
};
