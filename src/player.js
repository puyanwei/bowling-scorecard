var Player = function() {
  this.framesArray = [];
  this.currentFrame = 0;
  this.prevFrame = 0;
};

Player.prototype.entry = function(first, second) {
  frame = new Frame(first, second);
  this.framesArray.push(frame);
  this.setFrameVariables();
};

Player.prototype.setFrameVariables = function() {
  this.currentFrame = this.framesArray[this.framesArray.length - 1];
  if (this.framesArray.length > 1) {
    this.prevFrame = this.framesArray[this.framesArray.length - 2];
  }
  this.calculateTotal();
};

Player.prototype.calculateTotal = function() {
  if (this.framesArray.length < 1) {
    this.outputScore(this.currentFrame.totalFrame);
  } else {
    this.outputScore(
      (this.prevFrame.totalFrame += this.currentFrame.totalFrame)
    );
  }
};

Player.prototype.outputScore = function(runningTotal) {
  this.runningTotal = runningTotal;
  console.log(878);
  return [this.currentFrame.first, this.currentFrame.second, this.runningTotal];
};
