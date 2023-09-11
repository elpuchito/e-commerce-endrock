import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Product } from "../utils/api";
import { CartContext } from "../utils/CartContext";


interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-card">
      <img className="product-card__image" src={product.image} alt={product.title} />
      <h3 className="product-card__title">{product.title}</h3>
      <p className="product-card__price">${product.price}</p>
      <div className="product-cta-actions">
      <button className="product-card__button" onClick={handleAddToCart}>Add to Cart</button>
      <Link className="product-card__details" to={`/products/${product.id}`}>View Details</Link>
      </div>
    </div>
  );
};

export default ProductCard;