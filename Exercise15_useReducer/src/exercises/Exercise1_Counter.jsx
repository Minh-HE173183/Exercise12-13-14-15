import { useReducer } from 'react'
import { counterReducer } from './reducers/counterReducer'

// Counter Component - Exercise 1
export function Counter() {
  const [count, dispatch] = useReducer(counterReducer, 0)

  return (
    <div className="counter-container">
      <h2>Counter: {count}</h2>
      <div className="button-group">
        <button onClick={() => dispatch({ type: 'DECREMENT' })} className="btn-decrease">
          -
        </button>
        <button onClick={() => dispatch({ type: 'INCREMENT' })} className="btn-increase">
          +
        </button>
        <button onClick={() => dispatch({ type: 'RESET' })} className="btn-reset">
          Reset
        </button>
      </div>
    </div>
  )
}
