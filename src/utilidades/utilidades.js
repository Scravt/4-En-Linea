
const winnerCol = (board) => {
  let conteo = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length - 1; j++) {
      if (board[i][j] === board[i][j + 1] && board[i][j] !== null) {
        conteo++;
        if (conteo === 3) {
          return true;
        }
      } else {
        conteo = 0;
      }
    }
  }
  conteo = 0;
}

const winnerRow = (board) => {
  let conteo = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length - 1; j++) {
      if (board[j][i] === board[j + 1][i] && board[j][i] !== null) {
        conteo++;
        if (conteo === 3) {
          return true;
        }
      } else {
        conteo = 0;
      }
    }
  }
  conteo = 0;
}

const allEquals = (arr)=> { return arr.every(valor => valor === arr[0])}

const winnerDiagonal = (board) => {
  // Verificar diagonales de derecha a izquierda
  for (let i = 0; i <= 1; i++) {
    for (let j = 0; j <= 1; j++) {
        let diagonal = [];
        for (let k = 0; k < 4; k++) {
            const valor = board[i + k][j + k];
            if (valor !== null) {
                diagonal.push(valor);
            } else {
                diagonal = [];  
            }
        }
        if (diagonal.length === 4 && allEquals(diagonal)) {
            return true;
        }
    }
}

  // Verificar diagonales de izquierda a derecha
  for (let i = 0; i <= 1; i++) {
    for (let j = 4; j >= 3; j--) {
        let diagonal = [];
        for (let k = 0; k < 4; k++) {
            const valor = board[i + k][j - k];
            if (valor !== null) {
                diagonal.push(valor);
            } else {
                diagonal = [];  
            }
        }
        if (diagonal.length === 4 && allEquals(diagonal)) {
            return true;
        }
    }
}

  return false;
}







const draw = (board) => {
  let conteo = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] == null) {
        conteo++
      }
      }
    }
    if (conteo < 1) {
      return true;
    } else {
      return false;
    }
  
  conteo = 0;
}


export const winner = (board) => {
  if (winnerCol(board) || winnerRow(board)||winnerDiagonal(board)) {
    return true;
  }

  if (draw(board)) {
    return null
  }

  else if (!winnerCol(board) && !winnerRow(board)) {
    return false;
  }


};
