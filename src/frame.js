var Frame = function(first, second) {
  this.errorCheck(first, second);
  this.first = first;
  this.second = second;
};

Frame.prototype.errorCheck = function(first, second) {
  if (first > 10 || second > 10) {
    throw "entry cannot be higher then 10";
  }
  if (first + second > 10) {
    throw "the sum of entries cannot be higher then 10";
  }
};

Frame.prototype.totalFrame = function(first, second) {
  this.totalFrame = first + second;
};

Frame.prototype.isStrike = function() {
  if (this.first == 10) {
    return true;
  }
};

Frame.prototype.isSpare = function() {
  if (this.first + this.second == 10 && this.first !== 10) {
    this.spare = true;
  }
  return this.spare;
};
