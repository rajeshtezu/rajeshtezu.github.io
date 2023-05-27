const ticTacToe = document.getElementById('tic-tac-toe');

const r1c1Elm = document.getElementById('r1c1');
const r1c2Elm = document.getElementById('r1c2');
const r1c3Elm = document.getElementById('r1c3');
const r2c1Elm = document.getElementById('r2c1');
const r2c2Elm = document.getElementById('r2c2');
const r2c3Elm = document.getElementById('r2c3');
const r3c1Elm = document.getElementById('r3c1');
const r3c2Elm = document.getElementById('r3c2');
const r3c3Elm = document.getElementById('r3c3');

// Adding event listener to the parent - utilizing Event Bubbling
ticTacToe.addEventListener('click', handleClick);

const idElmPair = {
  // Row-1
  r1c1: { elm: r1c1Elm, stateIndex: { r: 0, c: 0 } },
  r1c2: { elm: r1c2Elm, stateIndex: { r: 0, c: 1 } },
  r1c3: { elm: r1c3Elm, stateIndex: { r: 0, c: 2 } },

  // Row-2
  r2c1: { elm: r2c1Elm, stateIndex: { r: 1, c: 0 } },
  r2c2: { elm: r2c2Elm, stateIndex: { r: 1, c: 1 } },
  r2c3: { elm: r2c3Elm, stateIndex: { r: 1, c: 2 } },

  // Row-3
  r3c1: { elm: r3c1Elm, stateIndex: { r: 2, c: 0 } },
  r3c2: { elm: r3c2Elm, stateIndex: { r: 2, c: 1 } },
  r3c3: { elm: r3c3Elm, stateIndex: { r: 2, c: 2 } },
};

const initialGameState = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

let currentGameState = structuredClone(initialGameState);
let isLoading = false;
let currentTurn = 'X';

function toggleTurn() {
  currentTurn = currentTurn === 'X' ? 'O' : 'X';
}

function handleClick(event) {
  event.preventDefault();

  const elmId = event.target.id;

  switch (elmId) {
    case 'reset-btn':
      reset();
      break;

    default:
      if (!idElmPair[elmId]) return;

      const { elm, stateIndex } = idElmPair[elmId];
      const { r, c } = stateIndex;

      if (!currentGameState[r][c]) {
        const colorClass = currentTurn === 'X' ? 'x-color' : 'o-color';
        elm.classList.add(colorClass);
        elm.innerText = currentTurn;
        currentGameState[r][c] = currentTurn;

        checkWin();
        toggleTurn();
      }
  }

  event.stopPropagation();
}

function checkWin() {
  for (let i = 0; i < 3; i++) {
    // Check each row
    if (isRowFull(i)) {
      showMessage(currentTurn + ' won!');

      return;
    }

    // Check each column
    if (isColumnFull(i)) {
      showMessage(currentTurn + ' won!');

      return;
    }
  }

  // Check diagonal
  if (isDiagonalFull()) {
    showMessage(currentTurn + ' won!');

    return;
  }

  if (checkDraw()) {
    showMessage('Draw!');
  }
}

function isRowFull(rowNumber) {
  const row = currentGameState[rowNumber];

  return row.every((item) => item === currentTurn);
}

function isColumnFull(columnNumber) {
  const col = [
    currentGameState[0][columnNumber],
    currentGameState[1][columnNumber],
    currentGameState[2][columnNumber],
  ];

  return col.every((item) => item === currentTurn);
}

function isDiagonalFull() {
  const firstDiagonal = [
    currentGameState[0][0],
    currentGameState[1][1],
    currentGameState[2][2],
  ];

  const secondDiagonal = [
    currentGameState[0][2],
    currentGameState[1][1],
    currentGameState[2][0],
  ];

  const first = firstDiagonal.every((item) => item === currentTurn);
  const second = secondDiagonal.every((item) => item === currentTurn);

  return first || second;
}

function checkDraw() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (!currentGameState[i][j]) {
        return false;
      }
    }
  }

  return true;
}

function showMessage(message) {
  setTimeout(() => {
    alert(message);
    setTimeout(() => reset(), 500);
  }, 100);
}

function reset() {
  currentTurn = 'X';
  currentGameState = structuredClone(initialGameState);

  for (let key in idElmPair) {
    idElmPair[key].elm.innerText = '';
    idElmPair[key].elm.classList.remove('x-color');
    idElmPair[key].elm.classList.remove('o-color');
  }
}
