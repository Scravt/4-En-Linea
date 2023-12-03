import React from 'react'
import { Square } from './Square'

export const Winner = ({result, setResult, setBoard, turn}) => {
  return (
        <section className="winner">
          <div className="text">
            <h2>
              {
                result === null ? 'Draw' : `Victory`
              }
            </h2>

            <header>
              {result&& <Square>{turn}</Square>}
            </header>

            <footer>  
              <button onClick={()=>{
                setBoard(Array(5).fill(null).map(() => Array(5).fill(null)))
                setResult(false)
              }}>New Game</button>
            </footer>
          </div>
        </section>
  )
}
