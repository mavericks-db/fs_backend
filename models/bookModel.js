const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
  author: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const bookModel = model("bookModel", bookSchema, "books");

module.exports = bookModel;
