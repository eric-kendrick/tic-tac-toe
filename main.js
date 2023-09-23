//-------------- Query Selectors ------------//
var boxes = document.getElementsByClassName('box');
var playerOneDisplay = document.querySelector('.player-one-header');
var playerTwoDisplay = document.querySelector('.player-two-header');


//------------- Event Listeners ------------//
document.addEventListener("DOMContentLoaded", checkForWin);


//------------- Variables -------------------//
var clickCount = 0;
var playerOneTurn = true;

//------------- Data Functions --------------//

//Create a function that creates a player object. Properties include id, player token and number of wins

function createPlayer(id, token) {
  return {
    id: id,
    token: token,
    wins: 0
  }
};

function checkForWin(player) {
  var winArray = [
    [0, 1, 2], [3, 4, 5],
    [6, 7, 8], [0, 3, 6],
    [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ]
  for (var i = 0; i < winArray.length; i++) {
  
    var [one, two, three] = winArray[i];
    console.log('//-----Boxes[1]-------//');
    console.log(boxes[one]);
    console.log('//-----Boxes[2]-------//');
    console.log(boxes[two]);
    console.log('//-----Boxes[3]-------//');
    console.log(boxes[three]);


    if (boxes[one].innerHTML === player.token && boxes[two].innerHTML === player.token && 
      boxes[three] === player.token) {
        return true;
      }
  }
  return false;
}
// // Reset function that brings the game back to its original state by clearing out boxes and returns player arr to first
function resetGame() {
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML === '';
    clickCount = 0;
    currentPlayer = players[0];
  }
};

function addClick() {
  clickCount++;
  e.target.classList.add('clicked');
};


//-------------- DOM Functions ---------------//
