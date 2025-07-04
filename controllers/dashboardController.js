const User = require("../models/User");

module.exports = {
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
    res.render("customerDashboard.ejs", { name: req.name, currentMonth });
  },
};
