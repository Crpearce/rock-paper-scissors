// querySelectors
var classicBtn = document.querySelector('#classicBtn')
var difficultBtn = document.querySelector('#difficultBtn')
var changeGameBtn = document.querySelector('.change-game')
var humanScore = document.querySelector('#user-score')
var gameOptionText = document.querySelector('.game-option-text')
var computerScore = document.querySelector('#computer-score')
var iconStatement = document.querySelector('.icon-statement')
var gameOptionText = document.querySelector('.game-option-text')
var rockIcon = document.querySelector('#rockIcon')
var paperIcon = document.querySelector('#paperIcon')
var scissorsIcon = document.querySelector('#scissorsIcon')
var alienIcon = document.querySelector('#alienIcon')
var lizardIcon = document.querySelector('#lizardIcon')

//event listeners
classicBtn.addEventListener('click', showEasyGame)
difficultBtn.addEventListener('click', showDifficultGame)
changeGameBtn.addEventListener('click', resetGame)

var game = new Game()

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
window.addEventListener('load', createPlayers);

function showEasyGame() {
  show(iconStatement)
  hide(classicBtn)
  hide(difficultBtn)
  hide(gameOptionText)
  show(changeGameBtn)
  show(rockIcon)
  show(paperIcon)
  show(scissorsIcon)
}

function showDifficultGame() {
  show(iconStatement)
  hide(classicBtn)
  hide(difficultBtn)
  hide(gameOptionText)
  show(rockIcon)
  show(paperIcon)
  show(scissorsIcon)
  show(alienIcon)
  show(lizardIcon)
  show(changeGameBtn)
}

function resetGame() {
  hide(rockIcon)
  hide(paperIcon)
  hide(scissorsIcon)
  hide(alienIcon)
  hide(lizardIcon)
  hide(changeGameBtn)
  show(classicBtn)
  show(difficultBtn)
  hide(iconStatement)
  show(gameOptionText)
}

function assignComputerChoice() {
  var computerChoice;
  if (game.skillLevel === 'classic') {
    computerChoice = getRandomInt(3)
  } else {
    computerChoice = getRandomInt(5)
  }
  if (computerChoice === 0) {
    game.players[1].choice = 'Rock'
  } else if (computerChoice === 1) {
    game.players[1].choice = 'Paper'
  } else if (computerChoice === 2) {
    game.players[1].choice = 'Scissors'
  } else if (computerChoice === 3) {
    game.players[1].choice = 'Lizard'
  } else {
    game.players[1].choice = 'Alien'
  }
}

function show(e) {
  e.classList.remove('hidden')
}

function hide(e) {
  e.classList.add('hidden')
}
