var Game = function() {
  this.score = [];
}

Game.prototype.entry = function(first, second = 0) {
  if (first + second > 10) {
    throw ("scores cannot be a sum of over 10")
  }
  if (arguments.length == 1 && first !== 10) {
    throw ("single entries can only be strikes")
  }
  if (this.score.length > 9) {
    throw ("no more entries allowed as game over")
  }
  this.score.push([first, second]);
};
