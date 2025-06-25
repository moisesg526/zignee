const User = require("../models/User");

module.exports = {
  getDashboard: async (req, res) => {
    res.render("customerDashboard.ejs");
    // const user = await User.find({ name: req.user.nam });
    // console.log(user);
  },
};
