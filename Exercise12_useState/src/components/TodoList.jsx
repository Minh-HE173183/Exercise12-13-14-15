import { useState } from 'react'
import '../styles/TodoList.css'

function TodoList() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: input }])
      setInput('')
    }
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo()
    }
  }

  return (
    <div className="exercise-container">
      <h2>Exercise 4: Todo List</h2>
      <div className="exercise-content">
        <div className="todo-input-section">
          <input
            type="text"
            className="todo-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Please input a Task"
          />
          <button className="add-todo-btn" onClick={addTodo}>
            Add Todo
          </button>
        </div>

        <div className="todo-list-section">
          <h3>Todo List</h3>
          <ul className="todo-items">
            {todos.map(todo => (
              <li key={todo.id} className="todo-item">
                <span>{todo.text}</span>
                <button
                  className="delete-btn"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TodoList
