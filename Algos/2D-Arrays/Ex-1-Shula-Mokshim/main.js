const BOARD_HEIGHT = 10;
const BOARD_WIDTH = 10;
const LEVEL = 2;
//Asignment : Place Numbers in Shula
var board = [];
var hash = [];
board.length = BOARD_HEIGHT;
for (i = 0; i < BOARD_WIDTH; i++) {
  board[i] = [];
  board[i].length = BOARD_WIDTH;
}

const populate = () => {
  for (i = 0; i < BOARD_WIDTH; i++) {
    for (j = 0; j < BOARD_HEIGHT; j++) {
      if (Math.random() * 10 > 10 - LEVEL) {
        board[i][j] = -1;
      } else {
        board[i][j] = 0;
      }
    }
  }
};

function calculateFields(Board) {
  let count = 0;

  for (i = 0; i < Board.length; i++) {
    if (board[i])
      for (j = 0; j < Board[i].length; j++) {
        if (Board[i][j] != -1) {
          count = lookNorth(Board, count, i, j);
          count = lookSouth(Board, count, i, j);
          count = lookWest(Board, count, i, j);
          count = lookEast(Board, count, i, j);
          count = lookNW(Board, count, i, j);
          count = lookSW(Board, count, i, j);
          count = lookSE(Board, count, i, j);
          count = lookNE(Board, count, i, j);

          Board[i][j] = count;
          count = 0;
        }
      }
  }
  return Board;
}

populate();
board = calculateFields(board);

UI(board, reavealAttached);
