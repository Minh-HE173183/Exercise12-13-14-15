import { useState } from 'react'
import '../styles/DragDropList.css'

function DragDropList() {
  const [items, setItems] = useState([
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5'
  ])
  const [draggingItem, setDraggingItem] = useState(null)

  const handleDragStart = (index) => {
    setDraggingItem(index)
  }

  const handleDragEnd = () => {
    setDraggingItem(null)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleDrop = (index) => {
    if (draggingItem === null || draggingItem === index) {
      return
    }

    // Create a copy of items
    const newItems = [...items]
    
    // Remove the dragged item
    const draggedItem = newItems.splice(draggingItem, 1)[0]
    
    // Insert it at the drop position
    newItems.splice(index, 0, draggedItem)
    
    // Update state
    setItems(newItems)
    setDraggingItem(null)
  }

  return (
    <div className="exercise-container">
      <h2>Exercise 7: Drag and Drop List</h2>
      <div className="exercise-content">
        <ul className="drag-drop-list">
          {items.map((item, index) => (
            <li
              key={index}
              className={`drag-drop-item ${draggingItem === index ? 'dragging' : ''}`}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragEnd={handleDragEnd}
              onDragOver={handleDragOver}
              onDrop={() => handleDrop(index)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default DragDropList
