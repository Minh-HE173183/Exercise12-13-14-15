import { useState } from 'react'
import '../styles/ColorSwitcher.css'

function ColorSwitcher() {
  const [selectedColor, setSelectedColor] = useState('#0000ff')

  const colors = {
    red: { name: 'Red', value: '#ff0000' },
    blue: { name: 'Blue', value: '#0000ff' },
    green: { name: 'Green', value: '#00cc00' },
    yellow: { name: 'Yellow', value: '#ffff00' }
  }

  return (
    <div className="exercise-container">
      <h2>Exercise 5: Color Switcher</h2>
      <div className="exercise-content">
        <select
          className="color-select"
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
        >
          <option value="#ff0000">Red</option>
          <option value="#0000ff">Blue</option>
          <option value="#00cc00">Green</option>
          <option value="#ffff00">Yellow</option>
        </select>

        <div
          className="color-display"
          style={{ backgroundColor: selectedColor }}
        ></div>
      </div>
    </div>
  )
}

export default ColorSwitcher
