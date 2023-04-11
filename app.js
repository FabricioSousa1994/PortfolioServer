
require("dotenv").config();


const express = require("express");

const app = express();


// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);

const nodemailerRoutes = require("./routes/nodemailer.routes");
app.use("/", nodemailerRoutes)





module.exports = app;