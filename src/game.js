class Game {
    constructor() {
        this.frameTotalIndex = 0;
        this.frameBowlIndex = 0;
        this.scorecard = [];
        this.frameScores = [];
        this.spare = false;
        this.strike = false;
        this.doubleStrike = false;
        this.runningTotal = 0;
    }

    addBowl(bowlValue) {
        const bowl = new Bowl(bowlValue);
        this.scorecard.push(bowl);
        console.log(this.scorecard);
    }

    addFrameScore() {
        for (let i = 0; i < this.scorecard.length; i += 2) {
            const total = this.scorecard[i].value + this.scorecard[i + 1].value;
            this.frameScores.push(total);
        }
    }

    updateTotals() {
        if (this.frameScores.length > 0) {
            for (let i = 1; i < this.frameScores.length; i++) {
                this.frameScores[i] += this.frameScores[i - 1];
            }
        }
    }

    firstBowl() {
        return this.scorecard[0].value;
    }

    secondBowl() {
        return this.scorecard[1].value;
    }
}
