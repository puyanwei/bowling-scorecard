var Player = function() {
  this.framesArray = [];
  this.runningTotal = 0;
  this.score = [];
};

Player.prototype.entry = function(first, second) {
  frame = new Frame(first, second);
  this.framesArray.push(frame);
};

// Player.prototype.calculateBonus = function() {
//   for (var i = 1; i < this.framesArray.length; i++) {
//     this.wasSpare(i);
//   }
// };

Player.prototype.wasSpare = function(i) {
  if (this.framesArray[i - 1].spare) {
    this.framesArray[i - 1].totalFrame =
      this.framesArray[i].first + this.framesArray[i - 1].totalFrame;
  }
};
//
Player.prototype.outputScore = function() {
  for (var i = 0; i < this.framesArray.length; i++) {
    if (i > 0) {
      this.wasSpare(i);
    }
    this.score.push([
      console.log(i),
      console.log(this.framesArray[i].totalFrame),
      this.framesArray[i].first,
      this.framesArray[i].second,
      this.framesArray[i].totalFrame
    ]);
  }
  // this.calculateBonus();
  return this.score;
};
