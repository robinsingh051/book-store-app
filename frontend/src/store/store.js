import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import booksReducer from "./books";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    books: booksReducer,
  },
});

export default store;
