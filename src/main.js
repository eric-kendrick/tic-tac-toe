
//------------- Variables -------------------//
var clickCount = 0;
var players = [];
var currentPlayer;
var startingPlayer;

//------------- Functions --------------//
function createPlayer(id, token) {
  return {
    id: id,
    token: token,
    wins: 0
  }
};

function addPlayers() {
  var player1 = createPlayer(1, 'X');
  var player2 = createPlayer(2, 'O');

  players.push(player1, player2);
  playersView(players);

  currentPlayer = player1;
  currentPlayerMessage();
};

function checkForWin(player) {
  var winArrays = [
    [0, 1, 2], [3, 4, 5],
    [6, 7, 8], [0, 3, 6],
    [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  for (let i = 0; i < winArrays.length; i++) {
    var winCombos = winArrays[i];
    var[one, two, three] = [boxes[winCombos[0]], boxes[winCombos[1]], boxes[winCombos[2]]];

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

