const path = require("path");

// Load env variables
require("dotenv").config({
  path: path.join(
    __dirname,
    `../.env.${process.env.NODE_ENV || "development"}`
  ),
});
const { sequelize } = require("./config/mysql");

// Express App
const express = require("express");
const app = express();

// Initialize Middlewares
app.use(express.json()); // parse JSON data in request body
app.use(express.urlencoded({ extended: true })); // parse URL-encoded data in request body

// template engine configuration
app.set("view engine", "ejs");

// cors configurations
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

// morgan configurations to print api request logs
const morgan = require("morgan");
// Print api request log into terminal.
// here we are used dev format to print logs into terminal because it's print quick overview about user request with colorful output
app.use(morgan("dev"));

// Variables
const PORT = process.env.PORT;

// Default route
app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      `<h1>Welcome to ShopHere Ecommerce</h1><br /><a href="${process.env.LANDING_PAGE_URL}">Click Here</a> to view ShopHere Ecommerce Official Website.`
    );
});

// common middleware to handle all errors
app.use((err, req, res, next) => {
  console.log("errorHandler Error", err);
  res.status(err?.statusCode || 500).json({
    status: false,
    message: err?.message || `Something went wrong! Please try after sometime.`,
  });
});

// Connect MySQL database
sequelize
  .authenticate()
  .then(() => {
    console.log("MySQL database connection has been established successfully.");
    // Start server to listen user request on your port
    app.listen(PORT, () => {
      console.log(
        `Server is start listing on port: ${PORT}. Visit http://localhost:${PORT}`
      );
    });
  })
  .catch((reason) =>
    console.log("Unable to connect to the MySQL database:", reason)
  );
