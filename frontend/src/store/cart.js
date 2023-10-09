import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = {
  books: [],
  quantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    add(state, action) {
      const book = action.payload;
      const existingCartItem = state.books.find((item) => item.id === book.id);
      if (existingCartItem) {
        existingCartItem.amount += 1;
      } else {
        state.books.push({ ...book, amount: 1 });
      }
      state.quantity++;
    },
    remove(state, action) {
      const bookToRemove = action.payload;

      const existingCartItemIndex = state.books.findIndex(
        (item) => item.id === bookToRemove.id
      );

      if (existingCartItemIndex !== -1) {
        const book = action.payload;
        const existingCartItem = state.books.find(
          (item) => item.id === book.id
        );
        if (existingCartItem.amount === 1) {
          const updatedBooks = state.books.filter(
            (item) => item.id !== book.id
          );
          state.books = updatedBooks;
        } else {
          existingCartItem.amount--;
        }
        state.quantity--;
      }
    },
    setCart(state, action) {
      if (state.books.length !== 0) return;
      const booksToAdd = action.payload;

      state.quantity = booksToAdd.length;
      const updatedBooks = [...state.books];

      booksToAdd.forEach((bookToAdd) => {
        const existingCartItemIndex = updatedBooks.findIndex(
          (item) => item.id === bookToAdd.id
        );
        const existingCartItem = updatedBooks[existingCartItemIndex];

        if (existingCartItem) {
          existingCartItem.amount += 1;
        } else {
          updatedBooks.push({ ...bookToAdd, amount: 1 });
        }
      });
      state.books = updatedBooks;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
