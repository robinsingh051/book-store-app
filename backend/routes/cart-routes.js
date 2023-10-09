const express = require("express");
const cartController = require("../controllers/cart-controller");

const router = express.Router();

// /cart/:bookId => DELETE (to delete book from cart)
router.delete("/:bookId", cartController.removeFromCart);

// /cart => POST (to add book to cart)
router.post("/", cartController.addToCart);

// /cart => GET (to retrieve full cart)
router.get("/", cartController.getCart);

module.exports = router;
