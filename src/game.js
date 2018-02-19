function Game() {
  this.frameTotalIndex = 0;
  this.frameBowlIndex = 0;
  this.scorecard = [];
  this.frameScores = [];
  this.spare = false;
  this.strike = false;
  this.doubleStrike = false;
  this.runningTotal = 0;
}

Game.prototype.addBowl = function(bowlValue) {
  bowl = new Bowl(bowlValue);
  this.scorecard.push(bowl);
};

Game.prototype.addFrameScore = function() {
  for (let i = 0; i < this.scorecard.length; i += 2) {
    var total = this.scorecard[i].value + this.scorecard[i + 1].value;
    this.frameScores.push(total);
  }
};
