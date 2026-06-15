import Counter from './components/Counter'
import ControlledInput from './components/ControlledInput'
import ToggleVisibility from './components/ToggleVisibility'
import TodoList from './components/TodoList'
import ColorSwitcher from './components/ColorSwitcher'
import SearchFilter from './components/SearchFilter'
import DragDropList from './components/DragDropList'
import './App.css'

function App() {
  return (
    <div id="app-container">
      <Counter />
      <ControlledInput />
      <ToggleVisibility />
      <TodoList />
      <ColorSwitcher />
      <SearchFilter />
      <DragDropList />
    </div>
  )
}

export default App
