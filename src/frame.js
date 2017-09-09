var Frame = function() {
  this.strike = false;
  this.spare = false;
  this.first;
  this.second;
}

Frame.prototype.firstBowl = function(number) {
  if (number == 10) {
    this.strike = true;
  }
  if (number > 10) {
    throw ("entry cannot be bigger then 10")
  }
  this.first = number;
};

Frame.prototype.secondBowl = function(number) {
  if (this.first == null) {
    throw ("cannot enter the second bowl first")
  }
  if (number > 10) {
    throw ("entry cannot be bigger then 10")
  }
  if (this.first + number > 10) {
    throw ("entries cannot be a sum of more then 10")
  }
  if (number == 10) {
    this.spare = true;
  }
  if (this.first + number == 10) {
    this.spare = true;
  }
  this.second = number;
};
