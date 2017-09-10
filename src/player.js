var Player = function() {
  this.allScores = [];
  this.displayAllScores = [];
  this.framesPlayed = 0;
  this.runningScore = 0;
  this.prevFirstBowl = 0;
  this.prevTwoBowls = 0;
  this.currentFrame;
  this.prevFrame;
}

Player.prototype.entry = function(first, second) {
  frame = new Frame(first, second);
  this.allScores.push(frame);
  this.framesPlayed++;
  this.frameDeclare();
  this.runningScore += this.currentFrame.frameTotal;
  this.displayAllScores.push([this.currentFrame.first, this.currentFrame.second, this.runningScore]);
  // this.isStrike();
  this.prevCalcs();
  // this.isSpare();
};

Player.prototype.frameDeclare = function(arguments) {
  this.currentFrame = this.allScores[this.framesPlayed - 1];
  if (this.framesPlayed > 1) {
    this.prevFrame = this.allScores[this.framesPlayed - 2];
  }
};

Player.prototype.prevCalcs = function() {
  if (this.framesPlayed !== 1) {
    this.prevFirstBowl = this.prevFrame.first;
    this.prevTwoBowls = this.prevFrame.frameTotal;
  }
};

// Player.prototype.isSpare = function(arguments) {
//   if (this.framesPlayed > 1) {
//     if (this.prevFrame.spare) {
//       this.displayAllScores[this.framesPlayed - 2][2] += this.currentFrame.first
//     }
//   }
// };

Player.prototype.displayScore = function() {
  return this.displayAllScores;
};
