const express = require("express");

const router = express.Router();
const bookModel = require("../models/bookModel");

// create book route
router.post("/createbook", async (req, res) => {
  const { author, title } = req.body;
  const book = {
    author: author,
    title: title,
    date: Date.now(),
  };
  const response = await bookModel.create(book);
  res.json({ author: response.author, title: response.title });
});

// display books
router.get("/list", async (req, res) => {
  const response = await bookModel.find({});
  res.json({ data: response });
});

module.exports = router;
