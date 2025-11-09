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
    console.log(col, row);
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

const checkWinner = () => {
  const winConditions = [
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    [
      [2, 0],
      [2, 1],
      [2, 2],
    ],
    [
      [0, 0],
      [1, 0],
      [2, 0],
    ],
    [
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 2],
      [1, 2],
      [2, 2],
    ],
    [
      [0, 0],
      [1, 1],
      [2, 2],
    ],
    [
      [2, 0],
      [1, 1],
      [0, 2],
    ],
  ];
};
