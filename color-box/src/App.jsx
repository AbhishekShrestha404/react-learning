import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ColorBox from './ColorBox';
import ColorBoxGrid from './ColorBoxGrid'

const colors = [
  "#FF0000", "#0000FF", "#008000", "#FFFF00", "#FFA500",
  "#800080", "#FFC0CB", "#00FFFF", "#008080", "#00FF00",
  "#4B0082", "#FF7F50", "#FFD700", "#000080", "#800000",
  "#808000", "#40E0D0", "#FA8072", "#E6E6FA", "#D2691E",
  "#DC143C", "#87CEEB", "#98FF98", "#708090", "#FF00FF"
];

function App() {
  return (
    <div>
      <ColorBoxGrid colors={colors} />
    </div>
  )
}

export default App
