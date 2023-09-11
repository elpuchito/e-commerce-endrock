import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { CartContext, CartProvider } from "./utils/CartContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SideCart from './components/SideCart';

import Home from "./pages/Home";
import Listing from "./pages/Listing";
import ProductDetail from "./pages/ProductDetail";
import './App.css'

const App: React.FC = () => {
  const { isOpen, closeCart } = useContext(CartContext);
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Listing />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
        <SideCart isOpen={isOpen} onClose={closeCart} />
        <Footer />
      </Router>
    </CartProvider>

  );
};

export default App;