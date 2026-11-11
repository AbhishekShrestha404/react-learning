import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import CssBaseline from '@mui/material/CssBaseline';
import './App.css'
import TodoList from './TodoList';
import Navbar from './Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CssBaseline />
      <Navbar />
      <TodoList />

    </div>
  )

}

export default App;

