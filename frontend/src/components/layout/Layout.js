import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import { useState } from "react";
import Cart from "../cart/Cart";

function Layout(props) {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const showCartHandler = () => {
    console.log("button pressed");
    setCartIsVisible(true);
  };

  const hideCartHandler = () => {
    setCartIsVisible(false);
  };
  return (
    <div>
      {cartIsVisible && (
        <Cart show={cartIsVisible} onHideCart={hideCartHandler} />
      )}
      <MainNavigation onShow={showCartHandler} />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
