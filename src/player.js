var Player = function() {
  this.framesArray = [];
  this.runningTotal = 0;
  this.score = [];
};

Player.prototype.entry = function(first, second) {
  frame = new Frame(first, second);
  this.framesArray.push(frame);
};

Player.prototype.calculateBonus = function() {
  for (var i = 1; i < this.framesArray.length; i++) {
    this.wasSpare(i);
  }
};

Player.prototype.wasSpare = function(i) {
  if (this.framesArray[i - 1].spare) {
    this.score[i - 1][2] += this.framesArray[i].first;
    console.log("first " + this.framesArray[i].first);
    console.log("prevFrameTotal " + this.score[i - 1][2]);
    this.score[i][2] += this.framesArray[i].totalFrame;
    console.log("first " + this.framesArray[i].first);
    console.log("thisFrameTotal " + this.score[i][2]);
  }
};

Player.prototype.outputScore = function() {
  for (var i = 0; i < this.framesArray.length; i++) {
    this.score.push([
      this.framesArray[i].first,
      this.framesArray[i].second,
      (this.runningTotal += this.framesArray[i].totalFrame)
    ]);
  }
  console.log("preChange " + this.score);
  this.calculateBonus();
  return this.score;
};
