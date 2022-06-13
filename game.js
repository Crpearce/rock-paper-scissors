class Game {
  constructor() {
    this.players = []
    this.skillLevel
    this.winner
    this.turn
  }
  determineWinner() {
    if (
      this.players[0].selection === this.players[1].selection) {
      this.winner = 'draw'
    } else if (
      this.players[0].choice === 'rock' && this.players[1].choice === 'scissors' ||
      this.players[0].choice === 'rock' && this.players[1].choice === 'lizard' ||
      this.players[0].choice === 'scissors' && this.players[1].choice === 'paper' ||
      this.players[0].choice === 'scissors' && this.players[1].choice === 'lizard' ||
      this.players[0].choice === 'paper' && this.players[1].choice === 'rock' ||
      this.players[0].choice === 'paper' && this.players[1].choice === 'alien' ||
      this.players[0].choice === 'lizard' && this.players[1].choice === 'paper' ||
      this.players[0].choice === 'lizard' && this.players[1].choice === 'alien' ||
      this.players[0].choice === 'alien' && this.players[1].choice === 'scissors' ||
      this.players[0].choice === 'alien' && this.players[1].choice === 'rock'
    ) {
      this.players[0].wins++
      this.winner = this.players[0].name
    } else {
      this.players[1].wins++
      this.winner = this.players[1].name
    }
  }
  changeGame() {
    resetGame()
  }
}
