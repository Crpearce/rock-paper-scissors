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

// // global variables
var computerChoice

//event listeners
classicBtn.addEventListener('click', startEasyGame)
difficultBtn.addEventListener('click', startDifficultGame)
//changeGameBtn.addEventListener('click',resetGame)

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
