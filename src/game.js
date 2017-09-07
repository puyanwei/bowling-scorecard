var Game = function() {
  this.match = [];
  this.framesPlayed = 0;
  this.runningScore = 0;
  this.prevFirstBowl = 0;
  this.prevTwoBowls = 0;
}

Game.prototype.entry = function(first, second) {
  if (first + second > 10) {
    throw ("Entries cannot be a sum of over 10");
  }
  this.runningScore += first + second;
  this.match.push(new Frame(first, second));

  this.prevCalcs();
  this.framesPlayed = this.match.length;
};


Game.prototype.prevCalcs = function(arguments) {
  if (this.framesPlayed !== 0) {
    this.prevFirstBowl = this.match[this.framesPlayed - 1].bowlsPerFrame[0]
    this.prevTwoBowls = this.match[this.framesPlayed - 1].frameTotal
  }
};
