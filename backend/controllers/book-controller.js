const books = require("../models/Book");

exports.sendBooks = (req, res) => {
  res.status(200).json(books);
};

exports.sendBook = (req, res) => {
  const bookId = req.params.bookId;
  const selectedBook = books.find((book) => book.id === bookId);
  if (!selectedBook) {
    res.status(404).json({ error: "Book not found" });
  } else {
    res.status(200).json(selectedBook);
  }
};
