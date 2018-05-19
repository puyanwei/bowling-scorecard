'use strict';

$(window).on('load', () => {
    let game = new Game();

    $('.button').click(function() {
        let bowlValue = $(this).val();
        updateBowls(bowlValue);
        updateTotals();
    });

    let updateBowls = function(bowlValue) {
        bowlValue = parseInt(bowlValue);
        game.addBowl(bowlValue);
        hideButtonsIfSumOverTen(bowlValue);
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
            resetButtons();
            game.frameTotalIndex++;
        }
    };
    //
    // frameTenSpare() {
    //     if (
    //         this.firstBowlFrameTen() + this.secondBowlFrameTen() === 10 &&
    //         this.firstBowlFrameTen() !== 10
    //     ) {
    //         $('.button').show();
    //     }
    // }

    let resetButtons = function() {
        $('.button').show();
    };

    let hideButtonsIfSumOverTen = function(bowlValue) {
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

    let gameOver = function() {
        if (this.scorecard.length > 20) {
            $('.button').hide();
        }
    };
});
