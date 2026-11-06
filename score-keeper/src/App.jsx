import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ScoreKeeper from './ScoreKeeper'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ScoreKeeper numberOfPlayers={4} target={10} />
    </div>
  )
}

export default App
