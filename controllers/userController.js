module.exports = {
  login: (req, res) => {
    res.render("login.ejs");
  },
  signup: (req, res) => {
    res.render("signup.ejs");
  },
};
