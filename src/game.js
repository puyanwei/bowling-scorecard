var Game = function() {
  this.bowlsPerFrame = [];
  this.currentScore = [0];
  this.frameNumber = 0;
  this.frameTotal = 0;
  this.spare = false;
  this.strike = false;
}

Game.prototype.entry = function(first, second = 0) {
  this.frameTotal = first + second;
  if (arguments.length == 1 && first !== 10) {
    throw ("single entries can only be strikes");
  }
  if (first + second > 10) {
    throw ("scores cannot be a sum of over 10");
  }
  if (this.bowlsPerFrame.length > 9) {
    throw ("no more entries allowed as game over");
  }
  if (first == 10) {
    second = 0;
  }
  this.sum(first, second);
  this.bowlsPerFrame.push([first, second]);
  this.frameNumber++;
}

Game.prototype.sum = function(first, second) {
  this.addSumToArr();
  console.log(this.spare);
  if (this.spare == true) {
    this._spare(first)
  }
  if (this.strike == true) {
    this._strike()
  }
}

Game.prototype.addSumToArr = function() {
  this.frameTotal = this.frameTotal + this.currentScore[this.frameNumber];
  this.currentScore.push(this.frameTotal);
};

Game.prototype._spare = function(first) {
  console.log(first);
  this.currentScore[this.frameNumber] += first;
  this.currentScore[this.frameNumber + 1] += first;
  this.spare = false;
};
