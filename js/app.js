/*-------------------------------- Constants --------------------------------*/

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

/*---------------------------- Variables (state) ----------------------------*/

let board;
let turn;
let winner;
let tie;


/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.sqr')
const messageEl = document.getElementById('message')

console.log(squareEls)
console.log(messageEl)

/*-------------------------------- Functions --------------------------------*/

function init() {
  console.log('init is running')
  board = ['', '', '', '', '', '', '', '', '']
  turn = 'X'
  winner = false
  tie = false
  render();
}

init();

function render() {
  updateBoard()
  updateMessage()
}

function updateBoard() {
  board.forEach((value, idx) => {
    squareEls[idx].textContent = value
  })
}

function updateMessage() {
  if (winner === false && tie === false) {
    messageEl.textContent = `It's ${turn}'s turn`
  } else if (winner === false && tie === true) {
    messageEl.textContent = `It's a tie!`
  } else if (winner === true) {
    messageEl.textContent = `${turn} wins!`
  }
}

/*----------------------------- Event Listeners -----------------------------*/
