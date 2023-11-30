import React, {useState} from 'react'
import { Square } from './Square'

export const Board = () => {
    const [board, setBoard] = useState(() =>
    Array(5).fill(null).map(() => Array(5).fill(null))
  );

  return (
    <div className='board'>
      {board.map((fila, filaIndex) => (
        <div key={filaIndex} className="fila">
          {fila.map((elemento, colIndex) => (
            <Square key={colIndex} />
          ))}
        </div>
      ))}
    </div>
    
       
  )   
}

