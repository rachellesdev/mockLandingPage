import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Cards from './components/Cards/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Cards/>
    </div>
  )
}

export default App
