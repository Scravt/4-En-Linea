import React, { useState, useEffect } from 'react'
import { Square } from './Square'
import { winner } from '../utilidades/utilidades';
import { Winner } from './Winner';

export const Board = ({ move, turn }) => {
  const [board, setBoard] = useState(() =>
    Array(5).fill(null).map(() => Array(5).fill(null))
  );
  const [result, setResult] = useState(false)



  useEffect(() => {
    setBoard((board) => {
      const newBoard = [...board];
      let i = 0;
      while (i < newBoard.length && newBoard[i][move] !== null) {
        i++;
      }
      if (i < newBoard.length) {
        newBoard[i][move] = turn;
      }
      setResult(winner(newBoard))
      return newBoard;
    });
  }, [turn]);

  console.log(result)

  return (
    <div>
      <div className='board'>
        {board.map((fila, filaIndex) => (
          <div key={filaIndex} className="fila">
            {fila.map((elemento, colIndex) => (
              <Square key={colIndex}>{elemento}</Square>
            ))}
          </div>
        ))}

      </div>
      {
        result !== false && (
          <Winner result={result} turn={turn} setResult={setResult} setBoard={setBoard} />
       
        )
      }
    </div>


  )
}

