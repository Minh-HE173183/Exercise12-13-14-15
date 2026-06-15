import { useState } from 'react'
import UserPosts from './UserPosts'
import './Exercise1.css'

function Exercise1() {
  const [userId, setUserId] = useState(1)

  return (
    <div className="exercise1-container">
      <h1>Exercise 1: Data Fetching with useEffect</h1>
      <div className="user-selector">
        <label htmlFor="userSelect">Select a User ID: </label>
        <select 
          id="userSelect"
          value={userId} 
          onChange={(e) => setUserId(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => (
            <option key={id} value={id}>
              User {id}
            </option>
          ))}
        </select>
      </div>
      <UserPosts userId={userId} />
    </div>
  )
}

export default Exercise1
