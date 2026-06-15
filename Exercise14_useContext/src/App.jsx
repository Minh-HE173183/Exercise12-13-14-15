import './App.css'

// Import exercises here
import { Exercise1 } from './exercises/exercise1/Exercise1'
import { Exercise2 } from './exercises/exercise2/Exercise2'
// import { Exercise3 } from './exercises/exercise3/Exercise3'
// etc.

function App() {
  return (
    <div className="app-container">
      <section className="exercise-section">
        <h1>Exercise 1: Theme Toggle with useContext</h1>
        <Exercise1 />
      </section>
      
      <section className="exercise-section">
        <h1>Exercise 2: Shopping Cart with Real-time Updates</h1>
        <Exercise2 />
      </section>
    </div>
  )
}

export default App
