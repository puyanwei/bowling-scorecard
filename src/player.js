var Player = function() {
  this.allScores = [];
  this.displayAllScores = [];
  this.frameCount = 0;
  this.runningScore = 0;
  this.prevFirstBowl = 0;
  this.prevTwoBowls = 0;
  this.currentFrame;
  this.prevFrame;
}

Player.prototype.entry = function(first, second) {
  if (this.frameCount > 8) {
    throw ("no more two bowl entries left in game")
  }
  frame = new Frame(first, second);
  this.allScores.push(frame);
  this.run()
}
Player.prototype.run = function () {
  this.frameCount++;
  this.frameDeclare();
  this.runningScore += this.currentFrame.frameTotal;
  this.displayAllScores.push([this.currentFrame.first, this.currentFrame.second, this.runningScore]);
  this.prevCalcs();
  this.isSpare();
  this.isStrike();
};

Player.prototype.frameDeclare = function() {
  this.currentFrame = this.allScores[this.frameCount - 1];

  if (this.frameCount > 1) {
    this.prevFrame = this.allScores[this.frameCount - 2];
  }
};

Player.prototype.prevCalcs = function() {
  if (this.frameCount !== 1) {
    this.prevFirstBowl = this.prevFrame.first;
    this.prevTwoBowls = this.prevFrame.frameTotal;
  }
};

Player.prototype.isSpare = function() {
  if (this.frameCount == 9) {
    this.runningScore += 10
  }
  if (this.frameCount > 1 && this.frameCount != 9) {
    if (this.prevFrame.spare) {
      this.displayAllScores[this.frameCount - 2][-1] += this.currentFrame.first
      this.displayAllScores[this.frameCount - 1][-1] += this.currentFrame.first
      this.runningScore = this.displayAllScores[this.frameCount - 1][2]
    }
  }
};

Player.prototype.isStrike = function() {
  if (this.frameCount == 9) {
    this.runningScore += 10
  }
  if (this.frameCount > 1 && this.frameCount != 9) {
    if (this.prevFrame.strike) {
      this.displayAllScores[this.frameCount - 2][-1] += this.currentFrame.frameTotal
      this.displayAllScores[this.frameCount - 1][-1] += this.currentFrame.frameTotal
      this.runningScore = this.displayAllScores[this.frameCount - 1][2]
    }
  }
};

Player.prototype.tenthFrame = function(first, second, third = 0) {
  frameTen = new FrameTen(first, second, third);
  this.allScores.push(frameTen);
  this.runningscore += this.allScores[9].frameTotal
  this.displayAllScores.push([this.allScores[9].first, this.allScores[9].second, this.allScores[9].third, this.runningScore])
  this.frameCount++
  this.frameDeclare();
  this.isSpare();
  this.isStrike();
  this.runningScore += this.currentFrame.frameTotal
};

Player.prototype.displayScore = function() {
  return this.displayAllScores;
};
