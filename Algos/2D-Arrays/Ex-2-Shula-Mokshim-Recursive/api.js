const populate = () => {
  for (i in board) {
    for (j = 0; j < BOARD_WIDTH; j++) {
      if (Math.random() * 10 > 10 - LEVEL) {
        board[i][j] = -1;
      } else {
        board[i][j] = 0;
      }
    }
  }
};
function calculateFieldsVal(Board) {
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

function reavealAttached(board, i, j, isContinue = 1) {
  console.log(isContinue, i, j);
  if (!isContinue) return isContinue;

  if (hash[i] && hash[i][j + 1] != "revealed") {
    hash[i][j] = true;
  }

  isContinue = reavealNine(board, i, j);
  if (!isContinue) return isContinue;

  for (y = 0; y < hash.length; y++) {
    let row = hash[y];
    for (x = 0; x < row.length; x++) {
      if (hash[y][x] == true) {
        hash[y][x] = "revealed";
        document.querySelector(`#c${y}${x} .secret`).classList.add("reveal");
      } else if (board[y] && board[y][x] == 0 && hash[y][x] != "revealed") {
        hash[y][x] = true;

        reavealAttached(board, y, x, isContinue);
        return isContinue;
      }
    }
  }
}

function reavealNine(Board, i, j) {
  let nexts = null;

  //N
  if (Board[i - 1] && Board[i - 1][j] == 0) {
    document.querySelector(`#c${i - 1}${j} .secret`).classList.add("reveal");

    if (hash[i - 1][j] != false) {
      hash[i - 1][j] = true;
      nexts = true;
    }
  }

  //NE
  if (Board[i - 1] && Board[i - 1][j + 1] == 0) {
    document
      .querySelector(`#c${i - 1}${j + 1} .secret`)
      .classList.add("reveal");

    if (hash[i - 1][j + 1] != false) {
      hash[i - 1][j + 1] = true;
      nexts = true;
    }
  }
  //E
  if (Board[i] && Board[i][j + 1] == 0) {
    document.querySelector(`#c${i}${j + 1} .secret`).classList.add("reveal");

    if (hash[i][j + 1] != "revealed") {
      hash[i][j + 1] = true;
      nexts = true;
    }
  }
  //SE
  if (Board[i + 1] && Board[i + 1][j + 1] == 0) {
    document
      .querySelector(`#c${i + 1}${j + 1} .secret`)
      .classList.add("reveal");

    if (hash[i + 1][j + 1] != "revealed") {
      hash[i + 1][j + 1] = true;
      nexts = true;
    }
  }
  //S
  if (Board[i + 1] && Board[i + 1][j] == 0) {
    document.querySelector(`#c${i + 1}${j} .secret`).classList.add("reveal");

    if (hash[i + 1][j] != "revealed") {
      hash[i + 1][j] = true;
      nexts = true;
    }
  }
  //SW
  if (Board[i + 1] && Board[i + 1][j - 1] == 0) {
    document
      .querySelector(`#c${i + 1}${j - 1} .secret`)
      .classList.add("reveal");

    if (hash[i + 1][j - 1] != "revealed") {
      hash[i + 1][j - 1] = true;
      nexts = true;
    }
  }
  //W
  if (Board[i] && Board[i][j - 1] == 0) {
    document.querySelector(`#c${i}${j - 1} .secret`).classList.add("reveal");

    if (hash[i][j - 1] != "revealed") {
      hash[i][j - 1] = true;
      nexts = true;
    }
  }
  //NW
  if (Board[i - 1] && Board[i - 1][j - 1] == 0) {
    document
      .querySelector(`#c${i - 1}${j - 1} .secret`)
      .classList.add("reveal");

    if (hash[i - 1][j - 1] != "revealed") {
      hash[i - 1][j - 1] = true;
      nexts = true;
    }
  }
  return nexts;
}
var lookNorth = (Board, count, i, j) => {
  if (Board[i - 1] && Board[i - 1][j] != undefined && Board[i - 1][j] === -1) {
    count++;
  }
  return count;
};
var lookSouth = (Board, count, i, j) => {
  if (Board[i + 1] && Board[i + 1][j] != undefined && Board[i + 1][j] === -1) {
    count++;
  }
  return count;
};
var lookWest = (Board, count, i, j) => {
  if (Board[i] && Board[i][j - 1] != undefined && Board[i][j - 1] === -1) {
    count++;
  }
  return count;
};
var lookEast = (Board, count, i, j) => {
  if (Board[i] && Board[i][j + 1] != undefined && Board[i][j + 1] === -1) {
    count++;
  }
  return count;
};
var lookSW = (Board, count, i, j) => {
  if (
    Board[i + 1] &&
    Board[i + 1][j - 1] != undefined &&
    Board[i + 1][j - 1] === -1
  ) {
    count++;
  }
  return count;
};
var lookNW = (Board, count, i, j) => {
  if (
    Board[i - 1] &&
    Board[i - 1][j - 1] != undefined &&
    Board[i - 1][j - 1] === -1
  ) {
    count++;
  }
  return count;
};
var lookSE = (Board, count, i, j) => {
  if (
    Board[i + 1] &&
    Board[i + 1][j + 1] != undefined &&
    Board[i + 1][j + 1] === -1
  ) {
    count++;
  }
  return count;
};
var lookNE = (Board, count, i, j) => {
  if (
    Board[i - 1] &&
    Board[i - 1][j + 1] != undefined &&
    Board[i - 1][j + 1] === -1
  ) {
    count++;
  }
  return count;
};
