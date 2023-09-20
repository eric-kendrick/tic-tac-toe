//-------------- Query Selectors ------------//
var boxes = document.querySelector('section > div');
var playerOneView = document.querySelector('.player-one-header');
var playerTwoView = document.querySelector('.player-two-header');


//------------- Event Listeners ------------//



//------------- Variables -------------------//
var clickCounter = 0;
var winArray = [
  [boxes[0], boxes[1], boxes[2]],
  [boxes[3], boxes[4], boxes[5]],
  [boxes[6], boxes[7], boxes[8]],
  [boxes[0], boxes[3], boxes[6]],
  [boxes[1], boxes[4], boxes[7]],
  [boxes[2], boxes[5], boxes[8]],
  [boxes[0], boxes[4], boxes[8]],
  [boxes[6], boxes[4], boxes[2]]
]

//------------- Data Functions --------------//

//Create a function that creates a player object. Properties include id, player token and number of wins

function createPlayer(id, token, wins) {
  return {
    id: id,
    token: token,
    wins: wins
  }
};

//-------------- DOM Functions ---------------//