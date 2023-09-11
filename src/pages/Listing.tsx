import React, { useEffect, useState } from "react";
import { Product } from "../utils/api.ts";
import ProductCard from "../components/ProductCard.tsx";
import { getProducts } from "../utils/api.ts";

const Listing: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div className="listing">
      <h1 className="listing__title">Products</h1>
      <div className="listing__products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Listing;
