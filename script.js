const cellElements = document.querySelectorAll("[data-cell]");
const restartBtn = document.getElementById("restart");
const board = document.getElementById("board");
const xClass = "x";
const oClass = "o";
let circleTurn;

const WinningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

startGame();

function startGame() {
  circleTurn = false;
  cellElements.forEach((cell) => {
    cell.addEventListener("click", handleClick, { once: true });
  });
  setBoardHoverClass();
}

function handleClick(e) {
  const cell = e.target;
  const currentClass = circleTurn ? oClass : xClass;
  placeMark(cell, currentClass);

  swapTurns();
  setBoardHoverClass();
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

function swapTurns() {
  circleTurn = !circleTurn;
}

function setBoardHoverClass() {
  board.classList.remove(xClass);
  board.classList.remove(oClass);

  if (circleTurn) {
    board.classList.add(oClass);
  } else {
    board.classList.add(xClass);
  }
}
