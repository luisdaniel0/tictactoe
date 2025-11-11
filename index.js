const cells = document.querySelectorAll(".cell");
let currentPlayer = "X";

const gameBoard = [
  //two dimensional array
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
    const winner = checkWinner();
    if (winner) {
      alert("Game over!");
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

  for (let i = 0; i < winConditions.length; i++) {
    console.log(winConditions[i]);
    const positionOne =
      gameBoard[winConditions[i][0][0]][winConditions[i][0][1]];
    const positionTwo =
      gameBoard[winConditions[i][1][0]][winConditions[i][1][1]];
    const positionThree =
      gameBoard[winConditions[i][2][0]][winConditions[i][2][1]];
    if (
      positionOne === positionTwo &&
      positionTwo === positionThree &&
      positionOne !== ""
    ) {
      return positionOne;
    }
  }
  return null;
  // winConditions.forEach((winCon) => {
  //   console.log(winCon);
  //   const positionOne = gameBoard[winCon[0][0]][winCon[0][1]];
  //   const positionTwo = gameBoard[winCon[1][0]][winCon[1][1]];
  //   const positionThree = gameBoard[winCon[2][0]][winCon[2][1]];
  //   if (
  //     positionOne === positionTwo &&
  //     positionTwo === positionThree &&
  //     positionOne !== ""
  //   ) {
  //     return positionOne;
  //   } else {
  //     return null;
  //   }
  // });
};
