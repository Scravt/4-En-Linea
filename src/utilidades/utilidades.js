
export  const winner = (board) => {
    let conteo = 0;
  
    // Evaluar ganador por columna
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length - 1; j++) {
        if (board[i][j] === board[i][j + 1]&&board[i][j]!==null) {
          conteo++;
          if (conteo === 3) {
            return 'Hay un ganador';
          }
        } else {
          conteo = 0;
        }
      }
    }
  
    // Evaluar ganador por fila
    conteo = 0; 
  
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length - 1; j++) {
        if (board[j][i] === board[j + 1][i]&&board[j][i]!==null) {
          conteo++;
          if (conteo === 3) {
            return 'Hay un ganador';
          }
        } else {
          conteo = 0;
        }
      }
    }
  
    return 'No hay ganador';
  };
