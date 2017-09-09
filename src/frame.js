var Frame = function() {
  // this.bowlsPerFrame = [first, second];
  // this.frameTotal = first + second;
  this.strike = false;
  // this.spare = false;
  // this.isStrike()
  // this.isSpare()
  this.first = 0
}

Frame.prototype.firstBowl = function(number) {
  this.first = number;
  if (number == 10) {
    this.strike = true;
  }
  if (number > 10) {
    throw("entry cannot be bigger then 10")
  }
};

// Frame.prototype.isStrike = function() {
//   if (this.bowlsPerFrame[0] == 10) {
//   this.strike = true;
//   }
// };
//
// Frame.prototype.isSpare = function() {
//   if (this.frameTotal == 10) {
//   this.spare = true;
//   }
// };
