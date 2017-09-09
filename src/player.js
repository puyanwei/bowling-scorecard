var Player = function() {
  this.allScores = [];
  this.framesPlayed = 0;
  this.runningScore = 0;
  this.prevFirstBowl = 0;
  this.prevTwoBowls = 0;
}

Player.prototype.entry = function (first, second) {
  frame = new Frame(first, second);
  this.allScores.push(frame);
};
// Player.prototype.prevCalcs = function(arguments) {
//   if (this.framesPlayed !== 0) {
//     this.prevFirstBowl = this.match[this.framesPlayed - 1].bowlsPerFrame[0]
//     this.prevTwoBowls = this.match[this.framesPlayed - 1].frameTotal
//   }
// };
