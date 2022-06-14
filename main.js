// querySelectors
var classicBtn = document.querySelector('#classicBtn')
var difficultBtn = document.querySelector('#difficultBtn')
var changeGameBtn = document.querySelector('.change-game')
var gameOptionText = document.querySelector('.game-option-text')
var computerScore = document.querySelector('#computer-score')
var iconStatement = document.querySelector('.icon-statement')
var gameOptionText = document.querySelector('.game-option-text')
var rockIcon = document.querySelector('#rockIcon')
var paperIcon = document.querySelector('#paperIcon')
var scissorsIcon = document.querySelector('#scissorsIcon')
var alienIcon = document.querySelector('#alienIcon')
var lizardIcon = document.querySelector('#lizardIcon')
var userInfo = document.querySelector('#userInfo')
var userScore = document.querySelector('#userScore')
var computerInfo = document.querySelector('#computerInfo')
var computerScore = document.querySelector('#computerScore')
var userFighterChoice = document.querySelector('#fighterChoice')

//event listeners
window.addEventListener('load', createPlayers);
window.addEventListener('load', createDynamicAside)
userFighterChoice = addEventListener('click', updateFighterChoice)
classicBtn.addEventListener('click', updateClassicGame)
difficultBtn.addEventListener('click', updateDifficultGame)
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

function createDynamicAside() {
  userInfo.innerHTML = `
  <h2>${game.players[0].name} ${game.players[0].emoji}</h2>`
  userScore.innerHTML = `
  <div>Wins: ${game.players[0].wins}</div>`
  computerInfo.innerHTML = `
  <h2>${game.players[1].name} ${game.players[1].emoji}</h2>`
  computerScore.innerHTML = `
  <div>Wins: ${game.players[1].wins}</div>`
}

function showClassicGame() {
  startGame()
  show(iconStatement)
  show(changeGameBtn)
  show(rockIcon)
  show(paperIcon)
  show(scissorsIcon)
  updateFighterText()
}

function showDifficultGame() {
  startGame()
  show(iconStatement)
  show(rockIcon)
  show(paperIcon)
  show(scissorsIcon)
  show(alienIcon)
  show(lizardIcon)
  show(changeGameBtn)
  updateFighterText()
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
  resetWinCounter()
  createDynamicAside()
}

function startGame() {
  hide(classicBtn)
  hide(difficultBtn)
  hide(gameOptionText)
  assignComputerChoice()
}

function showResultDisplay() {
  createDynamicAside()
  show(iconStatement)
  hide(rockIcon)
  hide(paperIcon)
  hide(scissorsIcon)
  hide(alienIcon)
  hide(lizardIcon)
  hide(classicBtn)
  hide(difficultBtn)

  if (game.winner === 'draw') {
    iconStatement.innerText = `😭 It's a draw! 😭 `;
    showDraw()
  } else if (game.winner === game.players[0].name) {
    iconStatement.innerText = `${game.players[0].emoji} ${game.players[0].name} won this round! ${game.players[0].emoji}`;
    showWinner()
  } else {
    iconStatement.innerText = `${game.players[1].emoji} ${game.players[1].name} won this round! ${game.players[1].emoji}`;
    showWinner()
  }
}

function resetWinCounter() {
  game.players[0].wins = 0;
  game.players[1].wins = 0;
}

function updateClassicGame() {
  game.skillLevel = 'classic'
  showClassicGame()
}

function updateDifficultGame() {
  game.skillLevel = 'difficult'
  showDifficultGame()
}

function assignComputerChoice() {
  var computerChoice
  if (game.skillLevel === 'classic') {
    computerChoice = getRandomInt(3)
  } else {
    computerChoice = getRandomInt(5)
  }
  if (computerChoice === 0) {
    game.players[1].choice = 'rock'
  } else if (computerChoice === 1) {
    game.players[1].choice = 'paper'
  } else if (computerChoice === 2) {
    game.players[1].choice = 'scissors'
  } else if (computerChoice === 3) {
    game.players[1].choice = 'lizard'
  } else {
    game.players[1].choice = 'alien'
  }
  console.log(game.players[1].choice)
}

function updateFighterChoice(e) {
  var value = e.target.parentElement.value
  game.players[0].choice = e.target.parentElement.value
  if (value) {
    game.determineWinner()
  }
}

function showDraw() {
  if (game.players[0].choice === 'rock') {
    show(rockIcon)
  } else if (game.players[0].choice === 'paper') {
    show(paperIcon)
  } else if (game.players[0].choice === 'scissors') {
    show(scissorsIcon)
  } else if (game.players[0].choice === 'lizard') {
    show(lizardIcon)
  } else {
    show(alienIcon)
  }
  timeout()
}

function showWinner() {
  if (game.players[0].choice === 'rock') {
    show(rockIcon)
  } else if (game.players[0].choice === 'paper') {
    show(paperIcon)
  } else if (game.players[0].choice === 'scissors') {
    show(scissorsIcon)
  } else if (game.players[0].choice === 'lizard') {
    show(lizardIcon)
  } else {
    show(alienIcon)
  }

  if (game.players[1].choice === 'rock') {
    show(rockIcon)
  } else if (game.players[1].choice === 'paper') {
    show(paperIcon)
  } else if (game.players[1].choice === 'scissors') {
    show(scissorsIcon)
  } else if (game.players[1].choice === 'lizard') {
    show(lizardIcon)
  } else {
    show(alienIcon)
  }
  timeout()
}

function displayGameReset() {
  document.getElementById('mainScreen').style.pointerEvents = 'auto';
  if (game.skillLevel === 'classic') {
    updateClassicGame()
  } else {
    updateDifficultGame()
  }
}

function timeout() {
  document.getElementById('mainScreen').style.pointerEvents = 'none';
  var timeout = setTimeout(function() {
    displayGameReset();
  }, 2000);
}

function updateFighterText() {
  iconStatement.innerText = `Choose your fighter!`
}

function show(e) {
  e.classList.remove('hidden')
}

function hide(e) {
  e.classList.add('hidden')
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
