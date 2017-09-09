var Game = function() {
  this.players = []
}

Game.prototype.addPlayer = function(name) {
  this.players.push(name)
};
