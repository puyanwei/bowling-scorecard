var Frame = function(first, second) {
  this.strike = false;
  this.spare = false;
  this.first;
  this.second;
  this.firstBowl(first)
  this.secondBowl(second)
  this.frameTotal = this.first + this.second
}

Frame.prototype.firstBowl = function(first) {
  if (first == 10) {
    this.strike = true;
  }
  if (first > 10) {
    throw ("entry cannot be bigger then 10")
  }
  this.first = first;
};

Frame.prototype.secondBowl = function(second) {
  if (second > 10) {
    throw ("entry cannot be bigger then 10")
  }
  if (this.first + second > 10) {
    throw ("entries cannot be a sum of more then 10")
  }
  if (second == 10) {
    this.spare = true;
  }
  if (this.first + second == 10) {
    this.spare = true;
  }
  this.second = second;
};