var Player = function() {
  this.framesArray = [];
  this.runningTotal = 0;
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

Player.prototype.calculateTotal = function() {
  for (var i = 0; i < this.framesArray.length; i++) {
    this.runningTotal += this.framesArray[i].totalFrame;
  }
};

Player.prototype.outputScore = function() {
  for (var i = 0; i < this.framesArray.length; i++) {
    // this.calculateTotal();
    return [
      this.framesArray[i].first,
      this.framesArray[i].second
      // this.runningTotal
    ];
  }
};
