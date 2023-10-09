const books = require("../models/Book");
const cart = require("../models/Cart");

exports.getCart = (req, res) => {
  res.status(200).json(cart);
};

exports.addToCart = (req, res) => {
  console.log(req.body);
  const bookId = req.body.bookId;
  const selectedBook = books.find((book) => book.id === bookId);
  cart.push(selectedBook);
  res.status(201).json({ message: "success" });
};

exports.removeFromCart = (req, res) => {
  const bookId = req.params.bookId;
  const bookIndex = cart.findIndex((book) => book.id === bookId);

  if (bookIndex !== -1) {
    cart.splice(bookIndex, 1);
    res.status(204).json({ message: "Book removed from cart" });
  } else {
    res.status(404).json({ message: "Book not found in cart" });
  }
};
