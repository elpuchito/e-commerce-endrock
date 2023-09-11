import React, { useContext } from "react";
import { CartContext, ProductWithQuantity } from "../utils/CartContext";


interface CartCardProps {
  product: ProductWithQuantity;
}

const CartCard: React.FC<CartCardProps> = ({ product }) => {
  const { removeFromCart, incrementQuantity, decrementQuantity } = useContext(CartContext);

  const handleRemoveFromCart = (id: number) => {
    removeFromCart(id);
  };

  const handleIncrementQuantity = (id: number) => {
    incrementQuantity(id);
  };

  const handleDecrementQuantity = (id: number) => {
    decrementQuantity(id);
  };

  return (
    <div className="cart-card">
      <img src={product.image} alt={product.title} className="cart-card__image" />
      <div className="text wrapper">
      <h4 className="cart-card__title">{product.title} </h4>
      <h4 className="cart-card__subtitle">x{product.quantity}</h4>
      </div>
      <div className="buttons-wrapper">
      <button onClick={() => handleDecrementQuantity(product.id)}>-</button>
      <button onClick={() => handleIncrementQuantity(product.id)}>+</button>
      <button onClick={() => handleRemoveFromCart(product.id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartCard;