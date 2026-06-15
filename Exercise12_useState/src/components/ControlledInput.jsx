import { useState } from 'react'
import '../styles/ControlledInput.css'

function ControlledInput() {
  const [text, setText] = useState('')

  return (
    <div className="exercise-container">
      <h2>Exercise 2: Controlled Input Field</h2>
      <div className="exercise-content">
        <input
          type="text"
          className="text-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
        />
        <p className="input-display">Input text: {text}</p>
      </div>
    </div>
  )
}

export default ControlledInput
