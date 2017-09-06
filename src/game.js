var Game = function() {
  this.match = [];
  this.framesPlayed = 0;
  this.runningScore = 0;
}

Game.prototype.entry = function(first, second) {
  if (first + second > 10) {
    throw("Entries cannot be a sum of over 10");
  }
  this.runningScore += first + second;
  this.match.push(new Frame(first, second));
  if (arguments.length == 1 && first == 10) {
    this.match[this.framesPlayed].strike = true;
  }
  if (first + second == 10) {
    this.match[this.framesPlayed].spare = true;
  }
  this.framesPlayed = this.match.length;
};
