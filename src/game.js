function Game() {
  this.frameTotalIndex = 0;
  this.frameBowlIndex = 0;
  this.scoreCardArray = [];
  this.spare = false;
  this.strike = false;
  this.doubleStrike = false;
  this.runningTotal = 0;
}

Game.prototype.addBowl = function(bowl) {
  bowl = new Bowl(bowl);
  this.scoreCardArray.push(bowl);
  console.log(this.scoreCardArray);
};
