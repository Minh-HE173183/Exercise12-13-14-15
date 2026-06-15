import { createContext, useContext, useState } from 'react';

// Create CartContext
const CartContext = createContext();

// CartProvider component
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart
  const addToCart = (dish) => {
    const existingItem = cartItems.find((item) => item.id === dish.id);
    
    if (existingItem) {
      // If item already exists, increase quantity
      setCartItems(
        cartItems.map((item) =>
          item.id === dish.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Add new item with quantity 1
      setCartItems([...cartItems, { ...dish, quantity: 1 }]);
    }
  };

  // Remove item from cart
  const removeFromCart = (dishId) => {
    setCartItems(cartItems.filter((item) => item.id !== dishId));
  };

  // Clear cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Calculate total items
  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Calculate total value
  const getTotalValue = () => {
    return cartItems
      .reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0)
      .toFixed(2);
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    getTotalItems,
    getTotalValue
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use CartContext
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
