'use strict';

$(window).on('load', () => {
    let game = new Game();

    $('.button').click(function() {
        let bowlValue = $(this).val();
        // if (game.isTenthFrame()) {
        //     let frameTen = new FrameTen();
        //     frameTen.controller(bowlValue);
        // } else {
        updateBowls(bowlValue);
        updateTotals();
        // }
    });

    let updateBowls = function(bowlValue) {
        bowlValue = parseInt(bowlValue);
        game.addBowl(bowlValue);
        game.hideButtonsIfSumOverTen(bowlValue);
        game.addSingleScoreToPage(bowlValue);
        game.ifStrikeNextBowlZero(bowlValue);
        game.frameBowlIndex++;
    };

    let updateTotals = function() {
        if (game.isEven(game.frameBowlIndex)) {
            game.addBowlsToTotal();
            game.addBonusToTotals();
            game.addTotalToPage(game.runningTotal, 0);
            game.spareOrStrikeChecker();
            game.resetButtons();
            game.frameTotalIndex++;
        }
    };
});
