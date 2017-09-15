var Frame = function(first, second) {
  this.errorCheck(first, second);
  this.strike = false;
  this.spare = false;
  this.first = first;
  this.second = second;
  this.totalFrame = this.first + this.second;
  this.tenPinsGoneCheck();
};

Frame.prototype.errorCheck = function(first, second) {
  if (first > 10 || second > 10) {
    throw "entry cannot be higher then 10";
  }
  if (first + second > 10) {
    throw "the sum of entries cannot be higher then 10";
  }
};

Frame.prototype.tenPinsGoneCheck = function() {
  this.spareCheck();
  this.strikeCheck();
};

Frame.prototype.spareCheck = function() {
  if (this.first + this.second == 10 && this.first !== 10) {
    this.spare = true;
  }
};

Frame.prototype.strikeCheck = function() {
  if (this.first == 10) {
    this.strike = true;
  }
};
