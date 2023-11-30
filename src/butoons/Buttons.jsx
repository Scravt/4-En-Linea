import React from 'react'

export const Buttons = ({setMove}) => {
  return (
    <div className='list-button'>
        <button onClick={() => setMove(0)}>col 1</button>
        <button onClick={() => setMove(1)}>col 2</button>
        <button onClick={() => setMove(2)}>col 3</button>
        <button onClick={() => setMove(3)}>col 4</button>
        <button onClick={() => setMove(4)}>col 5</button>
    </div>
  )
}
