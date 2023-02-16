import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <Home />
      <About />
      <Work />
      <Contact />
    </main>
  )
}

export default App
