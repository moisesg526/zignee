const User = require("../models/Package");
//////// Left of trying to display dashboard with name of user!

module.exports = {
  getDashboard: (req, res) => {
    res.render("customerDashboard.ejs");
  },
};
