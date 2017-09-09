var Player = function() {
  this.match = [];
  this.framesPlayed = 0;
  this.runningScore = 0;
  this.prevFirstBowl = 0;
  this.prevTwoBowls = 0;
  this.first = 0
}

Player.prototype.entry = function(first, second) {
  if (first + second > 10) {
    throw ("Entries cannot be a sum of over 10");
  }
  this.match.push(new Frame(first, second));
  this.tally(first, second);
  this.prevCalcs();
  this.framesPlayed = this.match.length;
};

Player.prototype.prevCalcs = function(arguments) {
  if (this.framesPlayed !== 0) {
    this.prevFirstBowl = this.match[this.framesPlayed - 1].bowlsPerFrame[0]
    this.prevTwoBowls = this.match[this.framesPlayed - 1].frameTotal
  }
};

Player.prototype.tally = function(first, second) {
  this.runningScore += first + second;
  // console.log(this.runningScore);
  if (this.match[this.framesPlayed].strike == true){
    this.runningScore += 10 + this.prevTwoBowls
    // console.log(this.runningScore, this.prevTwoBowls, this.match[this.framesPlayed].strike);
  }
};

Frame.prototype.addSumToArr = function() {
  this.framesTotal = this.framesTotal + this.currentScore[this.frameNumber];
  this.currentScore.push(this.framesTotal);
};

Frame.prototype._spare = function(first) {
  this.currentScore[this.frameNumber] += first;
  this.currentScore[this.frameNumber + 1] += first;
};

Frame.prototype._strike = function(first, second) {
  this.currentScore[this.frameNumber] += first + second;
  this.currentScore[this.frameNumber + 1] += first + second;
};
