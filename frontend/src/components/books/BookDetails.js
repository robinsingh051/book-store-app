import classes from "./BookDetails.module.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";
const BookDetails = (props) => {
  const dispatch = useDispatch();
  const addToCartHandler = async () => {
    try {
      await axios.post(`http://localhost:4000/cart`, {
        bookId: props.book.id,
      });
      dispatch(cartActions.add(props.book));
    } catch (err) {
      console.log(err);
      toast.error("Unable to add to cart");
    }
  };
  return (
    <section className={classes.detail}>
      <img src={props.book.image} alt={props.book.title} />
      <h1>{props.book.title}</h1>
      <p>{props.book.author}</p>
      <p>{props.book.description}</p>
      <div className={classes.actions}>
        <button onClick={addToCartHandler}>Add to Cart</button>
      </div>
    </section>
  );
};
export default BookDetails;
