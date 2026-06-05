// Counter Component - A counter application with increment and decrement buttons
import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter">
      <h2>Counter Application</h2>
      <div className="counter-display">
        <p className="count-value">{count}</p>
      </div>
      <div className="counter-buttons">
        <button onClick={decrement} className="btn btn-decrease">
          -
        </button>
        <button onClick={reset} className="btn btn-reset">
          Reset
        </button>
        <button onClick={increment} className="btn btn-increase">
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
