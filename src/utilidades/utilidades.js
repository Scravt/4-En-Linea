
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

const winnerrow = (board) => {
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

const draw = (board) => {
  let conteo = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length - 1; j++) {
      if (board[i][j] == null) {
        conteo++
      }
    }
    if (conteo < 1) {
      return true;
    } else {
      return false;
    }
  }
  conteo = 0;
}


export const winner = (board) => {
  if(winnerCol(board)|| winnerrow(board)){
    return true;
  }else if (!winnerCol(board)&& !winnerrow(board)) {
    return false;
  } 
  
  if (draw(board)) {
    return null  
  }
};
