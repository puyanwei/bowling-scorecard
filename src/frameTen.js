var FrameTen = function(first, second, third) {
  this.first = first
  this.second = second
  this.third = third
  this.frameTotal = first + second + third
}

FrameTen.prototype.entry = function (first, second, third) {
  if (first > 10 || second > 10 || third > 10){
    throw ("any entry cannot be bigger then 10")
  }
  if (first + second > 10){
    throw ("the sum of the first and second entries cannot be bigger then 10")
  }
};
