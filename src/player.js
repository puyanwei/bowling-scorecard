var Player = function() {
  this.framesArray = [];
  this.scoreCard = [];
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
  if (this.scoreCard.length == 1) {
    return 0;
  }
  return this.scoreCard[this._frameNumber() - 2][2];
};

Player.prototype._addToScoreArray = function() {
  this.reset();
  for (var i = 0; i < this.framesArray.length; i++) {
    this.scoreCard.push([
      this.framesArray[i].first,
      this.framesArray[i].second,
      (this.runningTotal += this.framesArray[i].totalFrame())
    ]);
  }
};

Player.prototype.reset = function() {
  this.scoreCard = [];
  this.runningTotal = 0;
};

Player.prototype.outputScore = function() {
  this._addToScoreArray();
  return this.scoreCard;
};
