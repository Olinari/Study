function reavealAttached(Board, i, j) {
  if (Board[i - 1] && Board[i - 1][j] == 0) {
    //N
    document.querySelector(`#c${i - 1}${j} .secret`).classList.add("reveal");
    let index = 10 * (i - 1) + j;
    if (index < 0) {
      console.error("err");
    } else if (hash[index] != false) {
      hash[10 * (i - 1) + j] = true;
    }
  }

  //NE
  if (Board[i - 1] && Board[i - 1][j + 1] == 0) {
    document
      .querySelector(`#c${i - 1}${j + 1} .secret`)
      .classList.add("reveal");
    let index = 10 * (i - 1) + j + 1;
    if (index < 0) {
      console.error("err");
    } else if (hash[index] != false) {
      hash[10 * (i - 1) + j + 1] = true;
    }
  }
  //E
  if (Board[i] && Board[i][j + 1] == 0) {
    document.querySelector(`#c${i}${j + 1} .secret`).classList.add("reveal");
    let index = 10 * i + j + 1;
    if (index < 0) {
      console.error("err");
    } else if (hash[index] != false) {
      hash[index] = true;
    }
  }
  //SE
  if (Board[i + 1] && Board[i + 1][j + 1] == 0) {
    document
      .querySelector(`#c${i + 1}${j + 1} .secret`)
      .classList.add("reveal");
    let index = 10 * (i + 1) + j + 1;
    if (index < 0) {
      console.error("err");
    } else if (hash[index] != false) {
      hash[index] = true;
    }
  }
  //S
  if (Board[i + 1] && Board[i + 1][j] == 0) {
    document.querySelector(`#c${i + 1}${j} .secret`).classList.add("reveal");
    let index = 10 * (i + 1) + j;
    if (index < 0) {
      console.error("err");
    } else if (hash[index] != false) {
      hash[index] = true;
    }
  }
  //SW
  if (Board[i + 1] && Board[i + 1][j - 1] == 0) {
    document
      .querySelector(`#c${i + 1}${j - 1} .secret`)
      .classList.add("reveal");
    let index = 10 * (i + 1) + j - 1;
    if (index < 0) {
      console.error("err");
    } else if (hash[index] != false) {
      hash[index] = true;
    }
  }
  //W
  if (Board[i][j - 1] == 0) {
    document.querySelector(`#c${i}${j - 1} .secret`).classList.add("reveal");
    let index = 10 * i + j - 1;
    if (index < 0) {
      console.error("err");
    } else if (hash[index] != false) {
      hash[index] = true;
    }
  }
  //NW
  if (Board[i - 1] && Board[i - 1][j - 1] == 0) {
    document
      .querySelector(`#c${i - 1}${j - 1} .secret`)
      .classList.add("reveal");

    let index = 10 * (i - 1) + j - 1;
    if (index < 0) {
      console.error("err");
    } else if (hash[index] != false) {
      hash[index] = true;
    }
  }
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
