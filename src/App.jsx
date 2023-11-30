import { useState } from 'react'
import { Board } from './view/Board'
import './App.css'
import { Buttons } from './butoons/Buttons'

function App() {
const [move, setMove] = useState(null)

  return (
    <>
      <Buttons setMove={setMove}/>
      <Board move={move}/>
    </>
   
  )
}

export default App
