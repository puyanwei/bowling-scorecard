var Game = function() {
  this.bowlsPerFrame = [];
  this.currentScore = [0];
  this.frameNumber = 0;
  this.framesTotal = 0;
  this.totalSum = 0;
  this.spare = false;
  this.strike = false;
}

Game.prototype.entry = function(first, second = 0, third = 0) {
  this.framesTotal = first + second;
  if (arguments.length == 3 && this.bowlsPerFrame !== 10) {
    throw ("only the tenth frame can take 3 arguments");
  }
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
  if (this.spare == true) {
    this._spare(first)
    this.spare = false;
  }
  if (this.strike == true) {
    this._strike(first, second)
    this.strike = false;
  }
  if (first !== 10 && first + second == 10) {
    this.spare = true;
  }
  if (first == 10) {
    this.strike = true;
  }
}

Game.prototype.addSumToArr = function() {
  this.framesTotal = this.framesTotal + this.currentScore[this.frameNumber];
  this.currentScore.push(this.framesTotal);
};

Game.prototype._spare = function(first) {
  this.currentScore[this.frameNumber] += first;
  this.currentScore[this.frameNumber + 1] += first;
};

Game.prototype._strike = function(first, second) {
  this.currentScore[this.frameNumber] += first + second;
  this.currentScore[this.frameNumber + 1] += first + second;
};
