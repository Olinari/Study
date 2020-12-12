const BOARD_WIDTH = 10;
const BOARD_LENGTH = 10;
//Asignment : Place Numbers in Shula
const Board = [];
let hashTable = {};
//My Solution

function calculate() {
  let count = 0;

  var lookNorth = (count, i, j) => {
    if (
      Board[i - 1] &&
      Board[i - 1][j] != undefined &&
      Board[i - 1][j] === -1
    ) {
      count++;
    }
    return count;
  };
  var lookSouth = (count, i, j) => {
    if (
      Board[i + 1] &&
      Board[i + 1][j] != undefined &&
      Board[i + 1][j] === -1
    ) {
      count++;
    }
    return count;
  };
  var lookWest = (count, i, j) => {
    if (
      Board[i - 1] &&
      Board[i][j - 1] != undefined &&
      Board[i][j - 1] === -1
    ) {
      count++;
    }
    return count;
  };
  var lookEast = (count, i, j) => {
    if (
      Board[i + 1] &&
      Board[i][j + 1] != undefined &&
      Board[i][j + 1] === -1
    ) {
      count++;
    }
    return count;
  };
  var lookSW = (count, i, j) => {
    if (
      Board[i + 1] &&
      Board[i + 1][j - 1] != undefined &&
      Board[i + 1][j - 1] === -1
    ) {
      count++;
    }
    return count;
  };
  var lookNW = (count, i, j) => {
    if (
      Board[i - 1] &&
      Board[i - 1][j - 1] != undefined &&
      Board[i - 1][j - 1] === -1
    ) {
      count++;
    }
    return count;
  };
  var lookSE = (count, i, j) => {
    if (
      Board[i + 1] &&
      Board[i + 1][j + 1] != undefined &&
      Board[i][j] === -1
    ) {
      count++;
    }
    return count;
  };
  var lookNE = (count, i, j) => {
    if (
      Board[i - 1] &&
      Board[i - 1][j + 1] != undefined &&
      Board[i - 1][j + 1] === -1
    ) {
      count++;
    }
    return count;
  };

  for (i = 0; i < Board.length; i++) {
    for (j = 0; j < Board[i].length; j++) {
      if (Board[i][j] != -1) {
        count = lookNorth(count, i, j);
        count = lookSouth(count, i, j);
        count = lookWest(count, i, j);
        count = lookEast(count, i, j);
        count = lookNW(count, i, j);
        count = lookSW(count, i, j);
        count = lookSE(count, i, j);
        count = lookNE(count, i, j);

        Board[i][j] = count;
        count = 0;
      }
    }
  }
  return Board;
}

finalResult = calculate();
console.log(finalResult);
