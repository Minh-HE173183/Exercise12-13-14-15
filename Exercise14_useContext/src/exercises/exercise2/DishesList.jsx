import { useCart } from './CartContext';
import { dishes } from './dishes';
import { CartHeader } from './CartHeader';
import './DishesList.css';

export function DishesList() {
  const { addToCart } = useCart();

  return (
    <div className="dishes-container">
      <CartHeader />
      <h2>Menu</h2>
      <div className="dishes-grid">
        {dishes.map((dish) => (
          <div key={dish.id} className="dish-card">
            <div className="dish-header">
              <h3>{dish.name}</h3>
              {dish.label && <span className="label">{dish.label}</span>}
            </div>
            <p className="category">{dish.category}</p>
            <p className="description">{dish.description}</p>
            <div className="dish-footer">
              <span className="price">${dish.price}</span>
              <button
                className="add-to-cart-btn"
                onClick={() => addToCart(dish)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
