import classes from "./MainNavigation.module.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import Badge from "react-bootstrap/Badge";
import { FaShoppingCart } from "react-icons/fa";

function MainNavigation(props) {
  const numberOfCartItems = useSelector((state) => state.cart.quantity);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Books Store</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Store</Link>
          </li>
          <li>
            <Button variant="outline-light" onClick={props.onShow}>
              <FaShoppingCart /> Cart{" "}
              {numberOfCartItems > 0 && (
                <Badge pill variant="danger">
                  {numberOfCartItems}
                </Badge>
              )}
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
