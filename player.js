class Player {
  constructor(thisPlayer) {
    this.name = thisPlayer.name
    this.emoji = thisPlayer.emoji
    this.choice = 'rock' || 'paper' || 'scissors' || 'alien' || 'lizard'
    this.wins = 0
  }
}
