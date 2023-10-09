import Card from "../ui/Card";
import classes from "./BookItem.module.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";
import toast from "react-hot-toast";
import axios from "axios";

function BookItem(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const showDetailsHandler = () => {
    history.push(`/${props.book.id}`);
  };
  const addToCart = async () => {
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
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.book.image} alt={props.book.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.book.title}</h3>
          <author>{props.book.author}</author>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler} style={{ marginRight: "1rem" }}>
            Show Details
          </button>
          <button onClick={addToCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
}

export default BookItem;
