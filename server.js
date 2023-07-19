const express = require("express");
require("dotenv").config();

const server = express();

// imports
const db = require("./db");
const bookRouter = require("./routes/bookRoutes");

// env variables
const port = process.env.PORT || 5000;

// middlewares
server.use(express.json());
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
