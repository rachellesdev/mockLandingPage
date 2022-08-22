import { useState } from 'react'
import './App.css'
import CardsPage from './components/CardsPage/CardsPage'
import Header from './components/Header/Header'
import Form from './components/Form/Form'
import FriendsForm from './components/FriendsForm/FriendsForm'

function App() {

  return (
    <div className="App">
      <Header/>      
      <Form/>
      <CardsPage/>
      <FriendsForm/>
    </div>
  )
}

export default App
