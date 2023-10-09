import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { cartActions } from "./store/cart";
import { booksActions } from "./store/books";
import toast from "react-hot-toast";
import Home from "./pages/Home";
import BookDetailsPage from "./pages/BookDetailsPage";
import Loading from "./components/ui/Loading";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios.get("http://localhost:4000/books");
        dispatch(booksActions.setBooks(response.data));
        response = await axios.get("http://localhost:4000/cart");
        dispatch(cartActions.setCart(response.data));
        setLoading(false);
      } catch (err) {
        console.log(err);
        toast.error("Something went wrong");
      }
    };
    getData();
  }, [dispatch]);

  if (loading) return <Loading />;
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/:bookId">
        <BookDetailsPage />
      </Route>
    </Switch>
  );
}

export default App;
