const cells = document.querySelectorAll(".cell");
let currentPlayer = "X";

const gameBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

cells.forEach((cell) => {
  cell.addEventListener("click", (e) => {
    const col = Number(e.target.dataset.col);
    const row = Number(e.target.dataset.row);
    if (gameBoard[row][col]) {
      return;
    } else {
      gameBoard[row][col] = currentPlayer;
      cell.textContent = currentPlayer;
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      console.log(gameBoard);
    }
  });
});
