import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Cards from './components/Cards/Cards'
import Header from './components/Header/Header'

function App() {

  return (
    <div className="App">
      <Header/>      
      <Cards/>
    </div>
  )
}

export default App
