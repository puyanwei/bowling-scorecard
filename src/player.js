var Player = function() {
  this.framesArray = [];
  this.currentFrame;
  this.prevFrame;
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
};

Player.prototype.outputScore = function() {
  return [
    this.currentFrame.first,
    this.currentFrame.second,
    this.currentFrame.totalFrame
  ];
};
