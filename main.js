// querySelectors
var classicBtn = document.querySelector('#classicBtn')
var difficultBtn = document.querySelector('#difficultBtn')
var humanScore = document.querySelector('#user-score')
var computerScore = document.querySelector('#computer-score')
var iconStatement = document.querySelector('.icon-statement')
var gameOptionText = document.querySelector('.game-option-text')
var rockIcon = document.querySelector('.rock-icon')
var paperIcon = document.querySelector('.paper-icon')
var scissorsIcon = document.querySelector('.scissors-icon')
var alienIcon = document.querySelector('.alien-icon')
var lizardIcon = document.querySelector('.lizard-icon')

// var game = new Game()


//event listeners
classicBtn.addEventListener('click', startEasyGame)
difficultBtn.addEventListener('click', startDifficultGame)
//changeGameBtn.addEventListener('click',resetGame)
function createPlayers() {
  var human = new Player({
    name: 'Human',
    emoji: '🥷🏻'
  })
  var computer = new Player({
    name: 'Computer',
    emoji: '💻'
  })
  game.players.push(human)
  game.players.push(computer)
  }
function startEasyGame() {
  iconStatement.classList.remove("hidden")
  classicBtn.classList.add("hidden")
  difficultBtn.classList.add("hidden")
  gameOptionText.classList.add("hidden")
  rockIcon.classList.remove("hidden")
  paperIcon.classList.remove("hidden")
  scissorsIcon.classList.remove("hidden")
}

function startDifficultGame() {
  iconStatement.classList.remove("hidden")
  classicBtn.classList.add("hidden")
  difficultBtn.classList.add("hidden")
  gameOptionText.classList.add("hidden")
  rockIcon.classList.remove("hidden")
  paperIcon.classList.remove("hidden")
  scissorsIcon.classList.remove("hidden")
  alienIcon.classList.remove("hidden")
  lizardIcon.classList.remove("hidden")
}

function assignComputerChoice() {
  var computerChoice;
  if (game.skillLevel === 'classic') {
    computerChoice = getRandomInt(3);
  } else {
    computerChoice = getRandomInt(5);
  };

  if (computerChoice === 0) {
    game.players[1].choice = 'Rock';
  } else if (computerChoice === 1) {
    game.players[1].choice = 'Paper';
  } else if (computerChoice === 2) {
    game.players[1].choice = 'Scissors';
  } else if (computerChoice === 3) {
    game.players[1].choice = 'Lizard';
  } else {
    game.players[1].choice = 'Alien';
  };
};
