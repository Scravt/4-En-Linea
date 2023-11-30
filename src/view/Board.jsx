import React, {useState} from 'react'

export const Board = () => {
    const [board, setBoard] = useState(Array(10).fill(Array(10).fill(null)))
    console.log(board)

  return (
    <div>Board</div>
  )
}
