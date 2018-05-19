class FrameTen {
    constructor() {}

    controller(bowlValue) {
        console.log(game);
        game.addBonusToTotals();
        game.updateBowls(bowlValue);
        this.frameTenNoThird();
        game.frameTenSpare();
        game.finalScore();
    }

    frameTenNoThird() {
        if (
            game.firstBowlFrameTen() + game.secondBowlFrameTen() !== 10 &&
            game.firstBowlFrameTen() !== 10 &&
            game.secondBowlFrameTen() !== undefined
        ) {
            game.addSingleScoreToPage(0);
            game.scorecard.push(0);
            console.log("don't get a third strike");
        }
    }
}
