import React, { useState } from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  const [files, setFiles] = useState([])

  return (
    <div className="App">
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App