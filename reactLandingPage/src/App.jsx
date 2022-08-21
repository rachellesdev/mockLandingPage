import { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import Header from './components/Header/Header'
import Form from './components/Form/Form'

function App() {

  return (
    <div className="App">
      <Header/>      
      <Form/>
      <Cards/>
    </div>
  )
}

export default App
