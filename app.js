require("dotenv").config();

const express = require("express");

const app = express();

const cors = require('cors');
app.use(cors())

const bp = require("body-parser");
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);

const nodemailerRoutes = require("./routes/nodemailer.routes");
app.use("/", nodemailerRoutes);

module.exports = app;
