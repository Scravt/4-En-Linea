import React from 'react';

export const Buttons = ({ setMove, setTurn, turn, players }) => {
  const handleClick = (col) => {
    setMove(col);
    // Cambia el estado 'turn' solo si el estado actual es 'X'
    if (turn === players[0]) {
      setTurn(players[1]);
      
    }else{
      setTurn(players[0])
    }
  };

  return (
    <div className='list-button'>
      <button onClick={() => handleClick(0)}>SELECT</button>
      <button onClick={() => handleClick(1)}>SELECT</button>
      <button onClick={() => handleClick(2)}>SELECT</button>
      <button onClick={() => handleClick(3)}>SELECT</button>
      <button onClick={() => handleClick(4)}>SELECT</button>
    </div>
  );
};

