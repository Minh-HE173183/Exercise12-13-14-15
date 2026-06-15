import { useCart } from './CartContext';
import './Cart.css';

export function Cart() {
  const { cartItems, removeFromCart, clearCart, getTotalItems, getTotalValue } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <h2>Your Cart</h2>
        <p className="empty-cart">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="item-info">
              <h4>{item.name}</h4>
              <p className="item-details">
                Quantity: <span>{item.quantity}</span> | 
                Price: <span>${item.price}</span> | 
                Subtotal: <span>${(parseFloat(item.price) * item.quantity).toFixed(2)}</span>
              </p>
            </div>
            <button
              className="remove-btn"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <div className="summary-row">
          <span>Total Items:</span>
          <span className="summary-value">{getTotalItems()}</span>
        </div>
        <div className="summary-row">
          <span>Total Value:</span>
          <span className="summary-value">${getTotalValue()}</span>
        </div>
      </div>

      <button className="clear-cart-btn" onClick={clearCart}>
        Clear Cart
      </button>
    </div>
  );
}
