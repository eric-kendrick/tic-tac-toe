let clickCount = 0;
let players = [];
let startingPlayer;
let currentPlayer;

function createPlayer(id, token) {
  return {
    id: id,
    token: token,
    wins: 0
  }
};

function addPlayers() {
  const player1 = createPlayer(1, '💛');
  const player2 = createPlayer(2, '⭐️');

  players.push(player1, player2);
  playersView(players);
  startingPlayer = players[0];
  currentPlayer = players[0];
  currentPlayerMessage();
};

function checkForWin(player) {
  const winArrays = [
    [0, 1, 2], [3, 4, 5],
    [6, 7, 8], [0, 3, 6],
    [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  for (let i = 0; i < winArrays.length; i++) {
    let winCombos = winArrays[i];
    let [one, two, three] = [boxes[winCombos[0]], boxes[winCombos[1]], boxes[winCombos[2]]];

    if (one.innerHTML === player.token && two.innerHTML === player.token &&
      three.innerHTML === player.token) {
        increaseWins(player);
        winnerMessage(player);
        resetGame();
      } else if (clickCount === 9 && !messageDisplay.innerText.includes('wins')) {
        drawMessage();
      }
  }
};

function resetGame() {
  playersView(players);
  setTimeout(function() {
    boxes.forEach(function(box) {
      box.innerHTML = '';
      box.classList.remove('clicked');
    });
    clickCount = 0;
    currentPlayerMessage();
    newGamePlayerChange();
  }, 2000);
}

function addClick(e) {
  clickCount++;
  e.target.classList.add('clicked');
};

function increaseWins(player) {
  player.wins++;
};

function boxClicked(e) {
  if (e.target.classList.contains('clicked') === false) {
    addClick(e);
    e.target.innerHTML = currentPlayer.token;
    changePlayer();
    
    checkForWin(players[0]);
    checkForWin(players[1]);
  }
  if (clickCount === 9) {
    resetGame();
  }
};


