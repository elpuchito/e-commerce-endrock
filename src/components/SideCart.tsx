import React, { useContext } from "react";
import { CartContext } from "../utils/CartContext";
import CartCard from "./CartCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const SideCart: React.FC<Props> = () => {
  const { cart, clearCart, isOpen, closeCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleCheckout = () => {
    clearCart();
    alert("Purchase successful!");
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className={`side-cart ${isOpen ? 'open' : ''}`}>
      {isOpen && (
        <button className="close-sidecart-btn" onClick={closeCart}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
      )}
      {cart.length > 0 ? (
        <>
          {cart.map((product) => (
            <CartCard key={product.id} product={product} />
          ))}
          <h4>Total: {total}</h4>
          <button className="side-cart__checkout" onClick={handleCheckout}>Checkout</button>
        </>
      ) : (
        <p className="side-cart__empty">Your cart is empty.</p>
      )}
    </div>
  );
};

export default SideCart;