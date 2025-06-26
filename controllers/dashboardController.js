const User = require("../models/User");

module.exports = {
  getDashboard: async (req, res) => {
    res.render("customerDashboard.ejs");
  },
};
