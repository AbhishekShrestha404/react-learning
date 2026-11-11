import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import CssBaseline from '@mui/material/CssBaseline';
import './App.css'
import TodoList from './TodoList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CssBaseline />
      <h1>Todo List</h1>
      <TodoList />

    </div>
  )

}

export default App

