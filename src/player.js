var Player = function() {
  this.allScores = [];
  this.displayAllScores = [];
  this.framesPlayed = 0;
  this.runningScore = 0;
  this.prevFirstBowl = 0;
  this.prevTwoBowls = 0;
  this.currentFrame;
}

Player.prototype.entry = function(first, second) {
  frame = new Frame(first, second);
  this.allScores.push(frame);
  this.framesPlayed++;
  this.currentFrame = this.allScores[this.framesPlayed - 1];
  this.runningScore += this.currentFrame.frameTotal;
  this.displayAllScores.push([this.currentFrame.first, this.currentFrame.second, this.runningScore]);
  this.prevCalcs();
};

Player.prototype.prevCalcs = function() {
  if (this.framesPlayed !== 1) {
    this.prevFirstBowl = this.allScores[this.framesPlayed - 2].first;
    this.prevTwoBowls = this.allScores[this.framesPlayed - 2].frameTotal;
  }
};

Player.prototype.displayScore = function() {
  return this.displayAllScores;
};
