import React from "react";
import { Button, Modal } from "react-bootstrap";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";
import axios from "axios";
import toast from "react-hot-toast";

const Cart = (props) => {
  const dispatch = useDispatch();
  const cartBooks = useSelector((state) => state.cart.books);
  const hasItems = cartBooks.length > 0;

  const cartItemRemoveHandle = async (book) => {
    try {
      await axios.delete(`http://localhost:4000/cart/${book.id}`);
      dispatch(cartActions.remove(book));
    } catch (err) {
      console.log(err);
      toast.err("unable to remove from cart");
    }
  };

  const cartItemAddHandler = async (book) => {
    try {
      await axios.post(`http://localhost:4000/cart`, {
        bookId: book.id,
      });
      dispatch(cartActions.add(book));
    } catch (err) {
      console.log(err);
      toast.err("unable to remove from cart");
    }
  };
  const cartItems = cartBooks.map((item, index) => (
    <CartItem
      key={index}
      item={item}
      onRemove={cartItemRemoveHandle.bind(null, item)}
      onAdd={cartItemAddHandler.bind(null, item)}
    />
  ));

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={props.onHideCart}
      dialogClassName={classes.xlModal}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ maxHeight: "60vh", overflowY: "auto" }}>
        {cartItems}
      </Modal.Body>
      <Modal.Footer>{hasItems && <Button>Purchase</Button>}</Modal.Footer>
    </Modal>
  );
};

export default Cart;
