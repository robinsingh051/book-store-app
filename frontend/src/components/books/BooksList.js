import { useSelector } from "react-redux";
import BookItem from "./BookItem";
import classes from "./BooksList.module.css";

function BooksList(props) {
  const books = useSelector((state) => state.books.books);
  console.log(books);
  return (
    <ul className={classes.list}>
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </ul>
  );
}

export default BooksList;
