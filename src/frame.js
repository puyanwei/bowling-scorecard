var Frame = function(first, second) {
  this.bowlsPerFrame = [first, second];
  this.frameTotal = first + second;
  this.spare = false;
  this.strike = false;
}

// Frame.prototype.entry = function(first, second = 0, third = 0) {
//   this.framesTotal = first + second;
//   if (arguments.length == 3 && this.bowlsPerFrame !== 10) {
//     throw ("only the tenth frame can take 3 arguments");
//   }
//
//
//   if (this.bowlsPerFrame.length > 9) {
//     throw ("no more entries allowed as Frame over");
//   }
//   if (first == 10) {
//     second = 0;
//   }
//   this.sum(first, second);
//   this.bowlsPerFrame.push([first, second]);
//   this.frameNumber++;
// }
//
// Frame.prototype.sum = function(first, second) {
//   this.addSumToArr();
//   if (this.spare == true) {
//     this._spare(first)
//     this.spare = false;
//   }
//   if (this.strike == true) {
//     this._strike(first, second)
//     this.strike = false;
//   }
//   if (first !== 10 && first + second == 10) {
//     this.spare = true;
//   }
//   if (first == 10) {
//     this.strike = true;
//   }
// }
//
// Frame.prototype.addSumToArr = function() {
//   this.framesTotal = this.framesTotal + this.currentScore[this.frameNumber];
//   this.currentScore.push(this.framesTotal);
// };
//
// Frame.prototype._spare = function(first) {
//   this.currentScore[this.frameNumber] += first;
//   this.currentScore[this.frameNumber + 1] += first;
// };
//
// Frame.prototype._strike = function(first, second) {
//   this.currentScore[this.frameNumber] += first + second;
//   this.currentScore[this.frameNumber + 1] += first + second;
// };
