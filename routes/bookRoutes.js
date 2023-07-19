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

module.exports = router;
