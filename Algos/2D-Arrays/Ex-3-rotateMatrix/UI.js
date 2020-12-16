function UI(board, shula) {
  console.log(board);
  board.forEach((row, index) => {
    shula.insertAdjacentHTML(
      "beforeend",

      `<div id="r${index}" type="row">
      ${board[index]
        .map(
          (item, jndex) => `<div class="square" id="c${index}${jndex}">
        <span >${
          board[index][jndex] === -1 ? "b00m" : board[index][jndex]
        }</span>
        </div>`
        )
        .join("")}
      </div>`
    );
  });
}
