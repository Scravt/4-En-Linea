import React from 'react';

export const Buttons = ({ setMove, setTurn, turn }) => {
  const handleClick = (col) => {
    setMove(col);

    // Cambia el estado 'turn' solo si el estado actual es 'X'
    if (turn === 'x') {
      setTurn('O');
    }else{
      setTurn('x')
    }
  };

  return (
    <div className='list-button'>
      <button onClick={() => handleClick(0)}>col 1</button>
      <button onClick={() => handleClick(1)}>col 2</button>
      <button onClick={() => handleClick(2)}>col 3</button>
      <button onClick={() => handleClick(3)}>col 4</button>
      <button onClick={() => handleClick(4)}>col 5</button>
    </div>
  );
};

