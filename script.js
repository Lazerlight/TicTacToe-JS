const CIRCLE_CLASS = "circle";
const X_CLASS = "x";
const cellEl = document.querySelectorAll("[data-cell]");
const boardEl = document.getElementById("board");
let circleTurn;

startGame();

function startGame() {
  circleTurn = false;
  cellEl.forEach((cell) => {
    cell.addEventListener("click", handleClick, { once: true });
  });
  setBoardHover();
}
function handleClick(e) {
  const cell = e.target;
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
  placeMark(cell, currentClass);
  swapTurn();
  setBoardHover();
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}
function swapTurn() {
  circleTurn = !circleTurn;
}
function setBoardHover() {
  boardEl.classList.remove(CIRCLE_CLASS);
  boardEl.classList.remove(X_CLASS);
  if (circleTurn) {
    boardEl.classList.add(CIRCLE_CLASS);
  } else {
    boardEl.classList.add(X_CLASS);
  }
}
