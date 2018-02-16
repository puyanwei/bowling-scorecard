function Game() {
  this.frameTotalIndex = 0;
  this.frameBowlIndex = 0;
  this.scoreCardArray = [];
  this.frameScores = [];
  this.spare = false;
  this.strike = false;
  this.doubleStrike = false;
  this.runningTotal = 0;
}

Game.prototype.addBowl = function(bowlValue) {
  bowl = new Bowl(bowlValue);
  this.scoreCardArray.push(bowl);
  console.log(this.scoreCardArray);
};
