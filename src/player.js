var Player = function() {
  this.allScores = [];
};

Player.prototype.entry = function(first, second) {
  this.errorCheck(first, second);
  frame = new Frame(first, second);
  this.allScores.push(frame);
};

Player.prototype.errorCheck = function(first, second) {
  if (first > 10 || second > 10) {
    throw "entry cannot be higher then 10";
  }
  if (first + second > 10) {
    throw "the sum of entries cannot be higher then 10";
  }
};
