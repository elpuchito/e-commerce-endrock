import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../utils/CartContext";
import { Product, getProduct} from "../utils/api"

interface Params {
  id: string;
  [key: string]: string | undefined;
}

const ProductDetail: React.FC = () => {
  const { id } = useParams<Params>();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id !== undefined) {
      getProduct(parseInt(id, 10)).then((response) => {
        setProduct(response.data);
      });
    }
  }, [id]);
  

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail">
      <h2 className="product-detail__title">{product.title}</h2>
      <div className="image-detail-wrapper">
      <img className="product-detail__image" src={product.image} alt={product.title} />
      </div>
      <p className="product-detail__price">${product.price}</p>
      <p className="product-detail__description">{product.description}</p>
      <button className="product-detail__button" onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;