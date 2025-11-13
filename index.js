const cells = document.querySelectorAll(".cell");
let currentPlayer = "X";
const resetButton = document.querySelector(".resetBtn");

let gameBoard = [
  //two dimensional array
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
    }
    const winner = checkWinner();
    if (winner) {
      alert("Game over!  " + winner + " wins!");
    } else if (gameBoard.flat().every((cell) => cell !== "")) {
      alert("It's a tie! Go another round");
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
};

const resetGame = () => {
  gameBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = "";
  }

  currentPlayer = "X";
};

resetButton.addEventListener("click", resetGame);
//  The Big Picture:
// You're looping through all 8 possible winning combinations, and for each one, you're checking if someone has won.
// Line by line:
// javascriptconst positionOne = gameBoard[winConditions[i][0][0]][winConditions[i][0][1]];
// This is getting the actual value from the game board at the first winning position.
// Let's say i = 0 (first winning combination - the top row):

// winConditions[0] is [[0,0], [0,1], [0,2]] (the three positions in top row)
// winConditions[0][0] is [0, 0] (the first coordinate in that combination)
// winConditions[0][0][0] is 0 (the row number)
// winConditions[0][0][1] is 0 (the column number)
// So gameBoard[0][0] gives you whatever is in that cell ("X", "O", or "")

// Same for positionTwo and positionThree:

// positionTwo gets the value at the second coordinate winConditions[i][1]
// positionThree gets the value at the third coordinate winConditions[i][2]
