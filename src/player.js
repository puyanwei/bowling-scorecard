var Player = function() {
  this.framesArray = [];
  this.runningTotal = 0;
  this.score = [];
};

Player.prototype.entry = function(first, second) {
  frame = new Frame(first, second);
  this.framesArray.push(frame);
};

Player.prototype._frameNumber = function() {
  return this.framesArray.length;
};

Player.prototype._prevFrame = function() {
  if (this._frameNumber() == 0) {
    return new Frame(0, 0);
  }
  return this.framesArray[this._frameNumber() - 2];
};

// Player.prototype.wasStrike = function() {
//   for (var i = 1; i < this.framesArray.length; i++) {
//     if (this.framesArray[i - 1].isStrike()) {
//       this.framesArray[i - 1].totalFrame += this.framesArray[i].totalFrame;
//     }
//   }
// };
//
// Player.prototype.wasSpare = function() {
//   for (var i = 1; i < this.framesArray.length; i++) {
//     if (this.framesArray[i - 1].isSpare()) {
//       this.framesArray[i - 1].totalFrame =
//         this.framesArray[i].first + this.framesArray[i - 1].totalFrame;
//     }
//   }
// };

Player.prototype.calculateBonus = function() {
  this.wasSpare();
  this.wasStrike();
};

Player.prototype.outputScore = function() {
  this.calculateBonus();
  for (var i = 0; i < this.framesArray.length; i++) {
    this.score.push([
      this.framesArray[i].first,
      this.framesArray[i].second,
      (this.runningTotal += this.framesArray[i].totalFrame)
    ]);
  }
  console.log(this.score);
  console.log(this.framesArray);
  return this.score;
};
