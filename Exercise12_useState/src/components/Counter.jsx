import { useState } from 'react'
import '../styles/Counter.css'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="exercise-container">
      <h2>Exercise 1: Counter (useState)</h2>
      <div className="exercise-content">
        <button
          type="button"
          className="counter-btn"
          onClick={() => setCount((count) => count + 1)}
        >
          Increment
        </button>
        <p className="count-display">Count: {count}</p>
      </div>
    </div>
  )
}

export default Counter
