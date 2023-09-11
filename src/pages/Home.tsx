import React, { useEffect, useState } from "react";
import { Product, getProducts } from "../utils/api";
import ProductCard from "../components/ProductCard";


const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // Fetch the products when component mounts
  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response.data.slice(0, 4)); // Get the first 4 products
    });
  }, []);

  return (
    <div className="home">
      <div className="banner">
        <div className="banner__content">
          <h1>Ware. Build. Game.</h1>
          <h3>Snap on a hoodie, t-shirt, hard drive, or gamer monitor.</h3>
        </div>
        <div className="banner__image">
          <img src="https://images.unsplash.com/photo-1630396800502-7d5b966dc5d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2360&q=80" alt="Banner Image" />
        </div>
      </div>

      <section className="products">
        <h2 className="featured-title">Featured Products</h2>
        <div className="product-list">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="about">
        <h2>About Us</h2>
        <p>Welcome to our e-commerce store! We are a small business that specializes in selling high-quality jackets, hard drives, monitors, and sweaters. Our goal is to provide our customers with the best products at the most competitive prices. We take pride in our excellent customer service and strive to make your shopping experience as easy and enjoyable as possible.</p>
      </section>
    </div>
  );
};
export default Home;