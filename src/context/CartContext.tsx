'use client';
import { createContext, useState, useEffect, ReactNode } from 'react';

export interface CartItem {
  documentId: string;
  id: string;
  title: string;
  price: number;
  description: string;
  category_name: string;
  image: string;
  quantity?: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (item: CartItem) => void;
  getCartTotal: () => number;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load initial cart data from localStorage only in the browser
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedCartItems = localStorage.getItem('cartItems');
      if (storedCartItems) {
        setCartItems(JSON.parse(storedCartItems));
      }
    }
  }, []);

  const addToCart = (item: CartItem) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.documentId === item.documentId);

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.documentId === item.documentId
            ? { ...cartItem, quantity: (cartItem.quantity || 0) + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item: CartItem) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.documentId === item.documentId);

    if (isItemInCart) {
      const currentQuantity = isItemInCart.quantity ?? 0;
      if (currentQuantity === 1) {
        setCartItems(cartItems.filter((cartItem) => cartItem.documentId !== item.documentId));
      } else {
        setCartItems(
          cartItems.map((cartItem) =>
            cartItem.documentId === item.documentId
              ? { ...cartItem, quantity: currentQuantity - 1 }
              : cartItem
          )
        );
      }
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * (item.quantity || 0), 0);
  };

  // Save cart data to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        getCartTotal,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
