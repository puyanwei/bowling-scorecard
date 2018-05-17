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
    let bowl = new Bowl(bowlValue);
    this.scorecard.push(bowl);
    console.log(this.scorecard);
};

Game.prototype.addFrameScore = function() {
    for (let i = 0; i < this.scorecard.length; i += 2) {
        let total = this.scorecard[i].value + this.scorecard[i + 1].value;
        this.frameScores.push(total);
    }
};

Game.prototype.updateTotals = function() {
    if (this.frameScores.length > 0) {
        for (let i = 1; i < this.frameScores.length; i++) {
            this.frameScores[i] += this.frameScores[i - 1];
        }
    }
};

Game.prototype.firstBowl = function() {
    return this.scorecard[0].value;
};

Game.prototype.secondBowl = function() {
    return this.scorecard[1].value;
};
