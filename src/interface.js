'use strict';

$(window).on('load', () => {
    let game = new Game();

    $('.button').click(function() {
        let bowlValue = $(this).val();
        updateBowls(bowlValue);
        updateTotals();
    });

    const updateBowls = function(bowlValue) {
        bowlValue = parseInt(bowlValue);
        game.addBowl(bowlValue);
        hideButtonsIfSumOverTen(bowlValue);
        game.addSingleScoreToPage(bowlValue);
        game.ifStrikeNextBowlZero(bowlValue);
        game.frameBowlIndex++;
    };

    const updateTotals = function() {
        if (game.isEven(game.frameBowlIndex)) {
            game.addBowlsToTotal();
            game.addBonusToTotals();
            game.addTotalToPage(game.runningTotal, 0);
            game.spareOrStrikeChecker();
            resetButtons();
            game.frameTotalIndex++;
        }
    };

    const resetButtons = function() {
        $('.button').show();
    };

    const hideButtonsIfSumOverTen = function(bowlValue) {
        if (bowlValue !== 10) {
            const remainingPins = 10 - bowlValue;
            const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

            array.forEach((value) => {
                if (value > remainingPins) {
                    $(`#${value}`).hide();
                }
            });
        }
    };

    const gameOver = function() {
        if (this.scorecard.length > 20) {
            $('.button').hide();
        }
    };
});

//
// frameTenSpare() {
//     if (
//         this.firstBowlFrameTen() + this.secondBowlFrameTen() === 10 &&
//         this.firstBowlFrameTen() !== 10
//     ) {
//         $('.button').show();
//     }
// }
