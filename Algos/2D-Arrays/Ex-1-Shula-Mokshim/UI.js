function UI(board) {
  console.log(board);
  board.forEach((row, index) => {
    document.querySelector("#shula").insertAdjacentHTML(
      "beforeend",

      `<div id="r${index}" type="row">
      ${board[index]
        .map(
          (item, jndex) => `<div class="square" id="c${index}${jndex}">
        <span class= "secret">${
          board[index][jndex] === -1 ? "b00m" : board[index][jndex]
        }</span>
        <span class="flag">
        <img src="https://www.flaticon.com/svg/static/icons/svg/660/660154.svg"></span>
        </div>`
        )
        .join("")}
      </div>`
    );
  });
  setTimeout(() => {
    document.querySelectorAll(".square").forEach((square) => {
      square.addEventListener("click", (e) => {
        if (!e.target.closest(".flag")) {
          e.target.closest(".square").querySelector(".flag") &&
            e.target.querySelector(".flag").classList.add("hide");
        } else {
          if (e.target.closest(".flag").classList.contains("show")) {
            e.target.querySelector(".flag").classList.add("hide");
          }
        }
        e.target.querySelector(".secret") &&
          e.target.querySelector(".secret").classList.add("reveal");

        e.target.querySelector(".flag") &&
          e.target.querySelector(".flag").classList.add("hide");
        e.target.closest(".hide") &&
          e.target.closest(".hide").classList.remove("hide");
        let id = e.target.id;

        if (id && board[parseInt(id[1])][parseInt(id[2])] === -1) {
          console.log("B00m");
          document
            .querySelectorAll(".secret")
            .forEach((secret) => secret.classList.add("reveal"));
          setTimeout(() => {
            location.reload();
          }, 2000);
        } else if (board[parseInt(id[1])][parseInt(id[2])] == 0) {
          reavealAttached(board, parseInt(id[1]), parseInt(id[2]));
          hash[10 * parseInt(id[1]) + parseInt(id[2])] = false;
          let count = hash.filter(Boolean).length;

          if (count > 0) {
            count = hash.filter(Boolean).length;

            while (count > 0) {
              hash.forEach((item, index) => {
                if (hash[index]) {
                  let i = (index - (index % 10)) / 10;
                  let j = index % 10;

                  if (board[i] && board[i][j] === 0) {
                    console.log(i, j, board[i][j]);
                    hash[index] = false;
                    reavealAttached(board, i, j);
                  }

                  count = hash.filter((value) => value === true).length;
                  console.log(hash, count);
                }
              });
            }
          }
        } else {
          console.log(board[parseInt(id[1])][parseInt(id[2])]);
        }
      });
    });
    document.querySelectorAll(".flag").forEach((flag) => {
      flag.addEventListener("click", (e) => {
        if (!flag.classList.contains("show")) {
          flag.classList.add("show");
        } else {
          flag.classList.remove("show");
          flag.classList.add("hide");
        }
      });
    });
  }, 10);
}
