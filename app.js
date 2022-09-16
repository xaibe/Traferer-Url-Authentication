const express = require("express");
const app = express();
const path = require("path");
const http = require("http");
const server = http.createServer(app);
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
var compression = require("compression");

// Requiring Routes

const myAppRoutes = require("./routes/myApp.routes");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.get("/", function (req, res) {
  res.status(200).send({
    message: "Express backend server",
  });
});

//app.set('port', (3000));
app.set("port", process.env.PORT);

app.use(cors());
app.use(helmet());

// compress all responses
app.use(compression());

// Routes which should handle requests
app.use("/myApp", myAppRoutes);

// ...
server.listen(app.get("port"), () => {
  console.log(`Listening on http://localhost:`, app.get("port"));
});
