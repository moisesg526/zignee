const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connectDB = require("./config/database");
const homeRoutes = require("./routes/home");
const userRoute = require("./routes/userRoute");
const dashboardRoute = require("./routes/dashboardRoute");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const passport = require("passport");

require("dotenv").config({ path: "./config/.env" });

connectDB();

// Set view engine and static folder
app.set("view engine", "ejs");
app.use(express.static("public"));

// Parse form and JSON data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Passport Config
require("./config/passport")(passport);

//Express session (stored in MogoDB)
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DB_STRING }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/", homeRoutes);
app.use("/user", userRoute);
app.use("/dashboard", dashboardRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
