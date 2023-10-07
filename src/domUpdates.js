//-------------- Query Selectors ------------//

const boxes = document.querySelectorAll('section > div');
const messageDisplay = document.querySelector('.board-message');
const resetBtn = document.querySelector('.reset-btn');

//------------- Event Listeners ------------//

document.addEventListener("DOMContentLoaded", addPlayers);
boxes.forEach(function (box) {
  box.addEventListener('click', boxClicked);
});

//------------- DOM Functions -----------------//
function newGamePlayerChange() {
  startingPlayer = startingPlayer === players[0] ? players[1] : players[0];
  messageDisplay.innerText = `${startingPlayer.token}'s turn`;
}

function changePlayer() {
  currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
  messageDisplay.innerText = `${currentPlayer.token}'s turn`;
};

function winnerMessage(player) {
  messageDisplay.innerHTML = `${player.token} wins!`;
}

function drawMessage() {
  messageDisplay.innerHTML = `It's a draw!`;
}

function currentPlayerMessage() {
  messageDisplay.innerHTML = `${currentPlayer.token}'s turn`;
}

function playersView(players) {
  const playerOneDisplay = document.querySelector('.player-one-header');
  playerOneDisplay.innerHTML = 
  `<p class='player-token'>${players[0].token}</p>
   <p class='player-win-view'>${players[0].wins} wins</p>
  `;

  const playerTwoDisplay = document.querySelector('.player-two-header');
  playerTwoDisplay.innerHTML = 
  `<p class='player-token'>${players[1].token}</p>
   <p class='player-win-view'>${players[1].wins} wins</p>
  `;
};

