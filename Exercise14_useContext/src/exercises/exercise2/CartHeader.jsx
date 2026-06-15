import { useCart } from './CartContext';
import './CartHeader.css';

export function CartHeader() {
  const { getTotalItems, getTotalValue } = useCart();

  return (
    <div className="cart-header">
      <div className="cart-info">
        <div className="cart-stat">
          <span className="label">Total Items:</span>
          <span className="value">{getTotalItems()}</span>
        </div>
        <div className="cart-stat">
          <span className="label">Total Value:</span>
          <span className="value">${getTotalValue()}</span>
        </div>
      </div>
      <p className="real-time-note">💡 Real-time updates without page refresh!</p>
    </div>
  );
}
