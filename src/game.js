class Game {
    constructor() {
        this.allSpans = document.getElementsByTagName('span');
        this.totalClass = document.getElementsByClassName('total');
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

    isTenthFrame() {
        return this.frameBowlIndex > 17;
    }

    finalScore() {
        if (this.frameBowlIndex > 20) {
            addTotalToPage(this.runningTotal, 0);
            document.getElementsByClassName('total').hide();
        }
    }

    frameTenBonuses() {
        console.log(this.spare, strike, doubleStrike);
    }

    addBonusToTotals() {
        this.addSpareBonus();
        this.addStrikeBonus();
        this.addDoubleStrikeBonus();
    }

    addBowlsToTotal() {
        this.runningTotal += this.currentTotal();
    }

    spareOrStrikeChecker() {
        this.isStrike();
        this.isSpare();
        this.isDoubleStrike();
    }

    isSpare() {
        if (this.currentTotal() === 10 && this.secondBowl() !== 0) {
            this.spare = true;
        }
    }

    isStrike() {
        if (this.firstBowl() === 10) {
            this.strike = true;
        }
    }

    isDoubleStrike() {
        if (this.firstBowl() === 10 && prevFirstBowl() === 10) {
            doubleStrike = true;
        }
    }

    ifStrikeNextBowlZero(bowlValue) {
        if (
            bowlValue === 10 &&
            this.isEven(this.frameBowlIndex) &&
            !this.isTenthFrame()
        ) {
            this.nextBowlZero();
        }
    }

    nextBowlZero() {
        this.frameBowlIndex++;
        this.addSingleScoreToPage(0);
        this.scorecard.push(0);
    }

    addSpareBonus() {
        if (this.spare) {
            const newPrevTotal =
                this.getTotal(this.frameTotalIndex - 1) + this.firstBowl();
            this.runningTotal = newPrevTotal + this.currentTotal();
            this.addTotalToPage(newPrevTotal, 1);
            this.spare = false;
        }
    }

    addStrikeBonus() {
        if (this.strike) {
            const newPrevTotal =
                this.getTotal(frameTotalIndex - 1) + this.currentTotal();
            this.runningTotal = newPrevTotal + this.currentTotal();
            addTotalToPage(newPrevTotal, 1);
            if (this.firstBowl() !== 10) {
                this.strike = false;
            }
        }
    }

    addDoubleStrikeBonus() {
        if (this.doubleStrike) {
            const newPrevTwoTotal =
                getTotal(frameTotalIndex - 2) + this.firstBowl();
            const newPrevTotal =
                getTotal(frameTotalIndex - 1) + this.firstBowl();
            this.runningTotal = newPrevTotal + this.currentTotal();
            addTotalToPage(newPrevTwoTotal, 2);
            addTotalToPage(newPrevTotal, 1);
        }
    }

    getTotal(frameTotalIndex) {
        return parseInt(this.totalClass[frameTotalIndex].innerText);
    }

    isEven(number) {
        return number % 2 == 0;
    }

    addSingleScoreToPage(bowlValue) {
        this.bowlsSpan().innerText = bowlValue;
    }

    addTotalToPage(total, indexFromEnd) {
        this.totalSpan(indexFromEnd).innerText = total;
    }

    bowlsSpan() {
        return this.allSpans[this.frameBowlIndex];
    }

    totalSpan(indexFromEnd) {
        return this.totalClass[this.frameTotalIndex - indexFromEnd];
    }

    firstBowlFrameTen() {
        return this.scorecard[18];
    }

    secondBowlFrameTen() {
        return this.scorecard[19];
    }

    thirdBowlFrameTen() {
        return this.scorecard[20];
    }

    frameTenTotal() {
        firstBowlFrameTen() + secondBowlFrameTen() + thirdBowlFrameTen();
    }

    firstBowl() {
        return this.scorecard[this.numberOfBowls() - 1].value;
    }

    secondBowl() {
        return this.scorecard[this.numberOfBowls() - 2].value;
    }

    prevFirstBowl() {
        return this.scorecard[this.numberOfBowls() - 4].value;
    }

    prevSecondBowl() {
        return this.scorecard[this.numberOfBowls() - 3].value;
    }

    currentTotal() {
        return this.firstBowl() + this.secondBowl();
    }

    numberOfBowls() {
        return this.scorecard.length;
    }
}
