import BookItem from "./BookItem";
import classes from "./BooksList.module.css";

function BooksList(props) {
  return (
    <ul className={classes.list}>
      {props.books.map((book) => (
        <BookItem
          key={book.id}
          id={book.id}
          image={book.image}
          title={book.title}
          author={book.author}
        />
      ))}
    </ul>
  );
}

export default BooksList;
