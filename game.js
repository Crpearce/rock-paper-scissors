class Game {
  constructor() {
    this.players = []
    this.skillLevel
    this.turn
    this.winner
  }
  findWinner() {
    if (this.players[0].selection === this.players[1].selection) {
      this.winner = 'draw'
    }
    // write code for results of winner- example this.player at array value
    // [0]rock or [1]paper || all options.
    // increment counter for this.winner
  }
}
