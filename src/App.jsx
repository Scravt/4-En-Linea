import { useState } from 'react'
import { Board } from './view/Board'
import './App.css'
import { Buttons } from './butoons/Buttons'

function App() {
const [move, setMove] = useState('')
const[turn, setTurn] = useState('X')

  return (
    <>
      <Buttons setMove={setMove} setTurn= {setTurn} turn={turn} move={move}/>
      <Board move={move}  turn={turn} />
    </>
   
  )
}

export default App
