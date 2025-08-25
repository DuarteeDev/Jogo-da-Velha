let currentPlayer = 'X';
let gameState = ['', '', '', '', '', '', '', '', ''];
const winningConditions = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // linhas
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // colunas
  [0, 4, 8], [2, 4, 6]             // diagonais
];

document.querySelectorAll('.cell').forEach(cell => {
  cell.addEventListener('click', handleCellClick);
});

function handleCellClick(e) {
  const index = e.target.getAttribute('data-index');
  if (gameState[index] !== '' || checkWinner()) return;
  
  gameState[index] = currentPlayer;
  e.target.textContent = currentPlayer;
  
  if (checkWinner()) {
    document.getElementById('status').textContent = `Jogador ${currentPlayer} venceu!`;
    return;
  }
  
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  document.getElementById('status').textContent = `Vez do jogador ${currentPlayer}`;
}

function checkWinner() {
  return winningConditions.some(condition => {
    return condition.every(index => {
      return gameState[index] === currentPlayer;
    });
  });
}

function resetGame() {
  gameState = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  document.querySelectorAll('.cell').forEach(cell => {
    cell.textContent = '';
  });
  document.getElementById('status').textContent = 'Vez do jogador X';
}