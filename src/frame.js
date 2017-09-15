var Frame = function(first, second) {
  this.strike = false;
  this.spare = false;
  this.first = first;
  this.second = second;
  this.totalFrame = this.first + this.second
}

Frame.prototype.errorCheck = function(first, second) {
  if (first > 10 || second > 10) {
    throw "entry cannot be higher then 10";
  }
  if (first + second > 10) {
    throw "the sum of entries cannot be higher then 10";
  }
};
// Frame.prototype.firstBowl = function(first) {
//   if (first > 10) {
//     throw ("entry cannot be bigger then 10")
//   }
//   if (first == 10) {
//     this.strike = true;
//   }
//   this.first = first;
// };
//
// Frame.prototype.secondBowl = function(second) {
//   if (second > 10) {
//     throw ("entry cannot be bigger then 10")
//   }
//   if (this.first + second > 10) {
//     throw ("entries cannot be a sum of more then 10")
//   }
//   if (second == 10) {
//     this.spare = true;
//   }
//   if (this.first !== 10 && this.first + second == 10) {
//     this.spare = true;
//   }
//   this.second = second;
// };
