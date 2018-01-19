var FrameTen = function(first, second, third = 0) {
  this.first = first
  this.second = second
  this.third = third
  this.frameTotal = this.first + this.second + this.third
  this.entry()
}

FrameTen.prototype.entry = function() {
  if (this.first == 10 && this.second !== 10){
    throw("third entry only allowed if second bowl makes a spare or strike")
  }
  if (this.first > 10 || this.second > 10 || this.third > 10) {
    throw ("any entry cannot be bigger then 10")
  }
  if (this.first + this.second > 10) {
    throw ("the sum of the first and second entries cannot be bigger then 10")
  }
  if (this.first + this.second !== 10 && this.third != 0) {
    throw ("third entry only allowed if spare or strike bowled")
  }
};
