const BOARD_HEIGHT = 10;
const BOARD_WIDTH = 10;
const LEVEL = 1;
//Asignment : Place Numbers in Shula
var board = [];

board.length = BOARD_HEIGHT;
for (i = 0; i < BOARD_WIDTH; i++) {
  board[i] = [];
  board[i].length = BOARD_WIDTH;
}
var hash = [];
hash.length = BOARD_HEIGHT;
for (i = 0; i < BOARD_WIDTH; i++) {
  hash[i] = [];
  hash[i].length = BOARD_WIDTH;
}

populate();
board = calculateFieldsVal(board);
UI(board, reavealAttached);
