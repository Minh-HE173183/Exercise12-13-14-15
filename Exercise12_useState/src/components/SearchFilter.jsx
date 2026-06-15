import { useState } from 'react'
import '../styles/SearchFilter.css'

function SearchFilter() {
  const [searchQuery, setSearchQuery] = useState('')

  const items = [
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Elderberry',
    'Fig',
    'Grape',
    'Honeydew'
  ]

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="exercise-container">
      <h2>Exercise 6: Search Filter</h2>
      <div className="exercise-content">
        <input
          type="text"
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search items..."
        />

        <div className="items-list">
          {filteredItems.length > 0 ? (
            <ul>
              {filteredItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="no-results">No items found</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default SearchFilter
