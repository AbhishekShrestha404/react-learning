import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import SlotMachine from './SlotMachine'
import PropertyList from './PropertyList'
import Clicker from './Clicker'

const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];

function App() {
  return (
    <div>
      {/* <SlotMachine value1="🍉" value2="🍉" value3="🍉" />
      <SlotMachine value1="1" value2="2" value3="1" />
      <SlotMachine value1="1" value2="1" value3="1" /> */}

      {/* <PropertyList key={properties.id} name={properties.name} rating={p.rating} price={p.price} */}
      {/* <PropertyList propertiesList={properties} /> */}

      <Clicker message="HIIIIII" buttonText=" Please Click Me" />
      <Clicker message="Please stop clickking me" buttonText=" Do not Click Me" />

    </div>
  )
}
export default App
