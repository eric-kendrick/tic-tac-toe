//-------------- Query Selectors ------------//
var boxes = document.getElementsByClassName('box');
var playerOneDisplay = document.querySelector('.player-one-header');
var playerTwoDisplay = document.querySelector('.player-two-header');


//------------- Event Listeners ------------//



//------------- Variables -------------------//
var clickCount = 0;
var players = ['X', 'O'];
var currentPlayer = players[0];
var winArray = [
  [0, 1, 2], [3, 4, 5],
  [6, 7, 8], [0, 3, 6],
  [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
]
  
//------------- Data Functions --------------//

//Create a function that creates a player object. Properties include id, player token and number of wins

function createPlayer(id, token) {
  return {
    id: id,
    token: token,
    wins: 0
  }
};

// Build function to add player click on a board box. 
// Add click classlist
// Increment the click counter
function addClick(e) {
    clickCount++;
    e.target.classList.add('clicked');
}

function checkWinArray(player) {
  for (let i = 0; i < winArray.length; i++) {
    var [one, two, three] = winArray[i];
    if (boxes[one].innerHTML === player.token && boxes[two].innerHTML === player.token && 
      boxes[three] === player.token) {
        return true;
      }
  }
  return false;
}


//-------------- DOM Functions ---------------//