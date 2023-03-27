import { useState } from 'react'
import './App.css'
import Header from './copmonents/Header/Header'
import Shope from './copmonents/Shop/Shope'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Header></Header>
    <Shope></Shope> 
     
    </div>
  )
}

export default App
