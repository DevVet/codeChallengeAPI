const express = require("express");
const cors = require("cors");
const routes = require("./routes/v1");

// Initialize app
const app = express();

// enable cors
app.use(cors());
app.options("*", cors());

// v1 api routes
app.use("/v1", routes);

module.exports = app;
