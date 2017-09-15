var Player = function() {
  this.framesArray = [];
  this.currentFrame;
  this.prevFrame;
};

Player.prototype.entry = function(first, second) {
  this.errorCheck(first, second);
  frame = new Frame(first, second);
  this.framesArray.push(frame);
  this.setFrameVariables();
};

Player.prototype.errorCheck = function(first, second) {
  if (first > 10 || second > 10) {
    throw "entry cannot be higher then 10";
  }
  if (first + second > 10) {
    throw "the sum of entries cannot be higher then 10";
  }
};

Player.prototype.setFrameVariables = function() {
  this.currentFrame = this.framesArray[this.framesArray.length - 1];
  if (this.currentFrame > 1) {
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
