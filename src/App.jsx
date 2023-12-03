import { useState } from 'react'
import { Board } from './view/Board'
import './App.css'
import { Buttons } from './butoons/Buttons'

const players = ['💖','💀']

function App() {
const [move, setMove] = useState('')
const[turn, setTurn] = useState(players[0])

  return (
    <>
      <Buttons setMove={setMove} setTurn= {setTurn} turn={turn} move={move} players={players} />

      <Board move={move}  turn={turn}  />
    </>
   
  )
}

export default App
