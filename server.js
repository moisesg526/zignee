const express = require("express");
const app = express();
// const connectDB = require("./config/database");
const homeRoutes = require("./routes/home");

require("dotenv").config({ path: "./config/.env" });

// connectDB();

// Tells express to use EJS as the templating engine
app.set("view engine", "ejs");
// Serves static files from public directory. ex. CSS, JS, images
app.use(express.static("public"));
// Lets you access form data via req.body
app.use(express.urlencoded({ extended: true }));
// Parses incoming requests with application/json
app.use(express.json());

app.use("/", homeRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
