var Game = function() {
  this.score = [];
  this.displayScore = [];
  this.totalScore = 0;
}

Game.prototype.entry = function(first, second = 0) {
  if (arguments.length == 1 && first !== 10) {
    throw ("single entries can only be strikes");
  }
  this.display(first, second);
  if (first + second == 10) {
    second = "";
  }
  if (first + second > 10) {
    throw ("scores cannot be a sum of over 10");
  }
  if (this.score.length > 9) {
    throw ("no more entries allowed as game over");
  }
  this.score.push([first, second]);
}

Game.prototype.update = function() {
  for (var i = 0; i < this.score.length; i++) {
    for (var j = 0; j < this.score[i].length; j++) {
      this.totalScore += this.score[i][j]
    }
  }
  return this.totalScore;
}

Game.prototype.display = function(first, second) {
  if (first + second == 10) {
    second = "/";
  }
  if (first == 10) {
    first = "X", second = "";
  }
  this.displayScore.push([first, second]);
};
