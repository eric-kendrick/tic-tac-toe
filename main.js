//-------------- Query Selectors ------------//
var boxes = document.querySelectorAll('section > div'), clickCount = 0;
var playerOneDisplay = document.querySelector('.player-one-header');
var playerTwoDisplay = document.querySelector('.player-two-header');
var messageDisplay = document.querySelector('.board-message');
var resetBtn = document.querySelector('.reset-btn');

//------------- Variables -------------------//
var players = [];
var currentPlayer;


//------------- Event Listeners ------------//
document.addEventListener("DOMContentLoaded", addPlayers);
boxes.forEach(function (box) {
  box.addEventListener('click', boxClicked);
});
// resetBtn.addEventListener('click', resetGame)// <-----For testing reset functionality;


//------------- Data Functions --------------//

function createPlayer(id, token) {
  return {
    id: id,
    token: token,
    wins: 0
  }
};

function addPlayers() {
  var player1 = createPlayer(1, "X");
  var player2 = createPlayer(2, "O");
  players.push(player1, player2);
  currentPlayer = player1;
};

function changePlayer() {
  currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
  messageDisplay.innerText = `${currentPlayer.token} turn`;
};

function checkForWin(player) {
  var winArrays = [
    [0, 1, 2], [3, 4, 5],
    [6, 7, 8], [0, 3, 6],
    [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ]
  for (let i = 0; i < winArrays.length; i++) {
    var winCombos = winArrays[i];
    var one = boxes[winCombos[0]];
    var two = boxes[winCombos[1]];
    var three = boxes[winCombos[2]];

    if (one.innerHTML === player.token && two.innerHTML === player.token &&
      three.innerHTML === player.token) {
        winnerMessage(player);
        setTimeout(function() {
          resetGame();
        }, 2000);
      }
  }
};

function resetGame() {
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].innerText = '';
    boxes[i].classList.remove('clicked');
    changePlayer();
  }
};

function addClick(e) {
  clickCount++;
  e.target.classList.add('clicked');
};

//-------------- DOM Functions ---------------//

function boxClicked(e) {
  if (clickCount >= 9) {
    resetGame();
  } else {
    if (e.target.classList.contains('clicked') === false) {
      addClick(e);
      e.target.innerHTML = currentPlayer.token;
    }
    checkForWin(currentPlayer);
    changePlayer();
  }
}

function winnerMessage(player) {
  var winMessage = `Congrats! ${player.token} wins!`;
  messageDisplay.innerText = winMessage;
}
