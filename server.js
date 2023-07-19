const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
require("dotenv").config();

const server = express();

// imports
const db = require("./db");
const bookRouter = require("./routes/bookRoutes");

// env variables
const port = process.env.PORT || 5000;

// middlewares
server.use(express.json());
server.use(cors());
server.use("/api", bookRouter);

// home route
server.get("/", (req, res) => {
  res.send("Welcome to Express Server");
});

server.listen(port, () => {
  db.connectToServer().then(() => {
    console.log("Database connected!");
    console.log(`Server is running at http://localhost:${port}`);
  });
});

module.exports = server;
module.exports.handler = serverless(server);
