import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../utils/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Navbar: React.FC = () => {
  const { toggleCart, cart } = useContext(CartContext);
  return (
    <nav className="navbar">
      <ul className="navbar__links">
        <li className="navbar__link">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar__link">
          <Link to="/products">Products</Link>
        </li>
        <li className="navbar__link">
          <button className="cart-icon" onClick={toggleCart}>
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="cart-count">{cart.length}</span>
          </button>
        </li>
      </ul>
    </nav>
  );

};

export default Navbar;