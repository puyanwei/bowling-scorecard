var Player = function() {
  this.framesArray = [];
  this.score = [];
  this.runningTotal = 0;
};

Player.prototype.entry = function(first, second) {
  frame = new Frame(first, second);
  this.framesArray.push(frame);
};

Player.prototype._frameNumber = function() {
  return this.framesArray.length;
};

Player.prototype._prevFrame = function() {
  if (this._frameNumber() == 1) {
    return new Frame(0, 0);
  }
  return this.framesArray[this._frameNumber() - 2];
};

Player.prototype._currentFrame = function() {
  return this.framesArray[this._frameNumber() - 1];
};

Player.prototype._prevTotal = function() {
  if (this.score.length == 1) {
    return 0;
  }
  return this.score[this._frameNumber() - 2][2];
};

Player.prototype._addToScoreArray = function() {
  for (var i = 0; i < this.framesArray.length; i++) {
    this.score.push([
      this.framesArray[i].first,
      this.framesArray[i].second,
      (this.runningTotal += this.framesArray[i].totalFrame())
    ]);
  }
};

Player.prototype.outputScore = function() {
  this._addToScoreArray();
  console.log(this.score);
  console.log(this.framesArray);
  return this.score;
};
