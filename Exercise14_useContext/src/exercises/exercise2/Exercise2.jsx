import { CartProvider } from './CartContext';
import { DishesList } from './DishesList';
import { Cart } from './Cart';
import './Exercise2.css';

export function Exercise2() {
  return (
    <CartProvider>
      <div className="exercise2-layout">
        <DishesList />
        <Cart />
      </div>
    </CartProvider>
  );
}
