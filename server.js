const express = require("express");
require("dotenv").config();

const server = express();

const port = process.env.PORT || 5000;

server.get("/", (req, res) => {
  res.send("Welcome to Express Server");
});

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
