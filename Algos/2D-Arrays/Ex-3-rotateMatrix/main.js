const BOARD_HEIGHT = 3;
const BOARD_WIDTH = 3;
const LEVEL = 2;
//Asignment : Place Numbers in Shula
var board = [];
var count = 1;
board.length = BOARD_HEIGHT;
for (k = 0; k < BOARD_WIDTH; k++) {
  board[k] = [];
  board[k].length = BOARD_WIDTH;
}
//creare original
for (i = 0; i < BOARD_WIDTH; i++) {
  for (j = 0; j < BOARD_HEIGHT; j++) {
    board[i][j] = count++;
  }
}

var trans = [];

trans.length = BOARD_HEIGHT;
for (k = 0; k < BOARD_WIDTH; k++) {
  trans[k] = [];
  trans[k].length = BOARD_WIDTH;
}

for (i = 0; i < BOARD_WIDTH; i++) {
  for (j = 0; j < BOARD_HEIGHT; j++) {
    trans[i][j] = board[BOARD_HEIGHT - j - 1][i];
  }
}

UI(board, document.querySelector(`#shula1`));
UI(trans, document.querySelector(`#shula2`));
