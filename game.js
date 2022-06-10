var rpsValues = ['Rock', 'Paper', 'Scissors']

class Game {
  constructor() {
    this.skillLevel = `difficult` || `classic`
    this.winner = true
    this.draw = true
    this.reset = true
  }

  function randomSelection(rpsValues) {
    var randomSelection = this.rpsValues[Math.floor(Math.random()*this.rpsValues.length)]
  }
}
