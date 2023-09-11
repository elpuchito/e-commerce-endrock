import React, { createContext, useState } from "react";
import { Product } from "./api";

interface Props {
  children: React.ReactNode;
}

export interface ProductWithQuantity extends Product {
  quantity: number;
}

export const CartContext = createContext<CartContextProps>({
  cart: [],
  isOpen: false,
  addToCart: () => { },
  removeFromCart: () => { },
  clearCart: () => { },
  openCart: () => { },
  closeCart: () => { },
  toggleCart: () => { },
  incrementQuantity: () => { },
  decrementQuantity: () => { }
});



interface CartContextProps {
  cart: ProductWithQuantity[];
  isOpen: boolean;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  incrementQuantity: (productId: number) => void;
  decrementQuantity: (productId: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
}

export const CartProvider: React.FC<Props> = ({ children }) => {
  const [cart, setCart] = useState<ProductWithQuantity[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const isProductInCart = prevCart.find((item) => item.id === product.id);

      if (isProductInCart) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    openCart();
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productId)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const openCart = () => {
    setIsOpen(true);
  };

  const closeCart = () => {
    setIsOpen(false);
  };

  const incrementQuantity = (productId: number) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrementQuantity = (productId: number) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isOpen,
        addToCart,
        removeFromCart,
        incrementQuantity, //add
        decrementQuantity, //add
        clearCart,
        openCart,
        closeCart,
        toggleCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}