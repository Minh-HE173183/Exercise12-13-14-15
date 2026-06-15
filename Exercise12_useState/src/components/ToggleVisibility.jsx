import { useState } from 'react'
import '../styles/ToggleVisibility.css'

function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="exercise-container">
      <h2>Exercise 3: Toggle Visibility</h2>
      <div className="exercise-content">
        <button
          type="button"
          className="toggle-btn"
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? 'Hide' : 'Show'}
        </button>
        {isVisible && <p className="toggle-text">Toggle me!</p>}
      </div>
    </div>
  )
}

export default ToggleVisibility
