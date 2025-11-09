const cells = document.querySelectorAll(".cell");
let currentPlayer = "X";
cells.forEach((cell) => {
  cell.addEventListener("click", (e) => {
    const col = Number(e.target.dataset.col);
    const row = Number(e.target.dataset.row);
    console.log(row, col);
    gameBoard[row][col] = currentPlayer;
    console.log(gameBoard);
  });
});

const gameBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
