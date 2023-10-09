import React from "react";
import { useSelector } from "react-redux";
import BookDetails from "../components/books/BookDetails";
import { useParams } from "react-router-dom";

const BookDetailsPage = (props) => {
  const { bookId } = useParams();
  console.log(bookId);
  const books = useSelector((state) => state.books.books);
  const bookData = books.find((b) => b.id === bookId);
  return (
    <>
      <BookDetails key={bookData.id} book={bookData} />
    </>
  );
};
export default BookDetailsPage;
