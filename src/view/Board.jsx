import React, {useState, useEffect} from 'react'
import { Square } from './Square'

export const Board = ({move}) => {
    const [board, setBoard] = useState(() =>
    Array(5).fill(null).map(() => Array(5).fill(null))
  );
 
  
  useEffect(() => {
    setBoard((prevBoard) => {
      const newBoard = [...prevBoard];
      let i = 0;
      while (i < newBoard.length && newBoard[i][move] !== null) {
        i++;
      }
      if (i < newBoard.length) {
        newBoard[i][move] = 'x'; 
      }

      return newBoard;
    });
  }, [move]);
  console.log(board)

  return (
    <div className='board'>
    {board.map((fila, filaIndex) => (
      <div key={filaIndex} className="fila">
        {fila.map((elemento, colIndex) => (
          <Square key={colIndex}>{elemento}</Square>
        ))}
      </div>
    ))}
  </div>
    
       
  )   
}

