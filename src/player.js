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

Player.prototype.wasStrike = function() {
  for (var i = 1; i < this.framesArray.length; i++) {
    if (this.framesArray[i - 1].strike) {
      this.framesArray[i - 1].totalFrame += this.framesArray[i].totalFrame;
    }
  }
};

Player.prototype.wasSpare = function() {
  for (var i = 1; i < this.framesArray.length; i++) {
    if (this.framesArray[i - 1].spare) {
      this.framesArray[i - 1].totalFrame =
        this.framesArray[i].first + this.framesArray[i - 1].totalFrame;
    }
  }
};

Player.prototype.outputScore = function() {
  this.wasSpare();
  this.wasStrike();
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
