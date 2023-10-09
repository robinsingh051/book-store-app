const express = require("express");
const booksController = require("../controllers/book-controller");

const router = express.Router();

// /books/:bookId
router.get("/:bookId", booksController.sendBook);

// /books
router.get("/", booksController.sendBooks);

module.exports = router;
