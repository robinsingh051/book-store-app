import { createSlice } from "@reduxjs/toolkit";

const booksInitialState = {
  books: [],
};

const booksSlice = createSlice({
  name: "books",
  initialState: booksInitialState,
  reducers: {
    setBooks(state, action) {
      state.books = action.payload;
    },
  },
});

export const booksActions = booksSlice.actions;
export default booksSlice.reducer;
