'use strict';

$(window).on('load', () => {
    const allSpans = $('span');
    const totalClass = $('.total');

    let game = new Game();

    $('.button').click(function() {
        let bowlValue = $(this).val();
        game.addBowl(bowlValue);
        // if (isTenthFrame()) {
        //     frameTen(bowlValue);
        // } else {
        updateBowls(bowlValue);
        updateTotals();
        // }
    });

    let updateBowls = function(bowlValue) {
        bowlValue = parseInt(bowlValue);
        game.scorecard.push(bowlValue);
        hideButtonsIfSumOverTen(bowlValue);
        addSingleScoreToPage(bowlValue);
        ifStrikeNextBowlZero(bowlValue);
        game.frameBowlIndex++;
    };

    let updateTotals = function() {
        if (isEven(game.frameBowlIndex)) {
            addBowlsToTotal();
            addBonusToTotals();
            addTotalToPage(game.runningTotal, 0);
            spareOrStrikeChecker();
            resetButtons();
            game.frameTotalIndex++;
        }
    };

    let isTenthFrame = function() {
        return game.frameBowlIndex > 17;
    };

    let frameTen = function(bowlValue) {
        addBonusToTotals();
        updateBowls(bowlValue);
        frameTenNoThird();
        frameTenSpare();
        finalScore();
    };

    let finalScore = function() {
        if (game.frameBowlIndex > 20) {
            addTotalToPage(game.runningTotal, 0);
            $('.button').hide();
        }
    };

    let frameTenBonuses = function() {
        console.log(game.spare, strike, doubleStrike);
    };

    let frameTenNoThird = function() {
        if (
            firstBowlFrameTen() + secondBowlFrameTen() !== 10 &&
            firstBowlFrameTen() !== 10 &&
            secondBowlFrameTen() !== undefined
        ) {
            addSingleScoreToPage(0);
            game.scorecard.push(0);
            console.log(
                frameTenTotal(),
                game.runningTotal,
                "don't get a third strike"
            );
        }
    };

    let frameTenSpare = function() {
        if (
            firstBowlFrameTen() + secondBowlFrameTen() === 10 &&
            firstBowlFrameTen() !== 10
        ) {
            $('.button').show();
        }
    };

    let addBonusToTotals = function() {
        addSpareBonus();
        addStrikeBonus();
        addDoubleStrikeBonus();
    };

    let addBowlsToTotal = function() {
        game.runningTotal += currentTotal();
    };

    let spareOrStrikeChecker = function() {
        isStrike();
        isSpare();
        isDoubleStrike();
    };

    let isSpare = function() {
        if (currentTotal() === 10 && secondBowl() !== 0) {
            game.spare = true;
        }
    };

    let isStrike = function() {
        if (game.firstBowl() === 10) {
            strike = true;
        }
    };

    let isDoubleStrike = function() {
        if (game.firstBowl() === 10 && prevFirstBowl() === 10) {
            doubleStrike = true;
        }
    };

    let ifStrikeNextBowlZero = function(bowlValue) {
        if (
            bowlValue === 10 &&
            isEven(game.frameBowlIndex) &&
            !isTenthFrame()
        ) {
            nextBowlZero();
        }
    };

    let nextBowlZero = function() {
        game.frameBowlIndex++;
        addSingleScoreToPage(0);
        game.scorecard.push(0);
    };

    let addSpareBonus = function() {
        if (game.spare) {
            let newPrevTotal = getTotal(frameTotalIndex - 1) + game.firstBowl();
            game.runningTotal = newPrevTotal + currentTotal();
            addTotalToPage(newPrevTotal, 1);
            game.spare = false;
        }
    };

    let addStrikeBonus = function() {
        if (game.strike) {
            let newPrevTotal = getTotal(frameTotalIndex - 1) + currentTotal();
            game.runningTotal = newPrevTotal + currentTotal();
            addTotalToPage(newPrevTotal, 1);
            if (game.firstBowl() !== 10) {
                game.strike = false;
            }
        }
    };

    let addDoubleStrikeBonus = function() {
        if (game.doubleStrike) {
            let newPrevTwoTotal =
                getTotal(frameTotalIndex - 2) + game.firstBowl();
            let newPrevTotal = getTotal(frameTotalIndex - 1) + game.firstBowl();
            game.runningTotal = newPrevTotal + currentTotal();
            addTotalToPage(newPrevTwoTotal, 2);
            addTotalToPage(newPrevTotal, 1);
        }
    };

    let getTotal = function(frameTotalIndex) {
        return parseInt(totalClass[frameTotalIndex].innerText);
    };

    let hideButtonsIfSumOverTen = function(bowlValue) {
        if (bowlValue !== 10) {
            let remainingPins = 10 - bowlValue;
            let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

            array.forEach(function(value) {
                if (value > remainingPins) {
                    $(`#${value}`).hide();
                }
            });
        }
    };

    let resetButtons = function() {
        $('.button').show();
    };

    let isEven = function(number) {
        return number % 2 == 0;
    };

    let addSingleScoreToPage = function(bowlValue) {
        bowlsSpan().innerText = bowlValue;
    };

    let addTotalToPage = function(total, indexFromEnd) {
        totalSpan(indexFromEnd).innerText = total;
    };

    let bowlsSpan = function() {
        return allSpans[game.frameBowlIndex];
    };

    let totalSpan = function(indexFromEnd) {
        return totalClass[game.frameTotalIndex - indexFromEnd];
    };

    let firstBowlFrameTen = function() {
        return game.scorecard[18];
    };

    let secondBowlFrameTen = function() {
        return game.scorecard[19];
    };

    let thirdBowlFrameTen = function() {
        return game.scorecard[20];
    };

    let frameTenTotal = function() {
        firstBowlFrameTen() + secondBowlFrameTen() + thirdBowlFrameTen();
    };

    let prevFirstBowl = function() {
        return game.scorecard[game.scorecard.length - 4].value;
    };
    let prevSecondBowl = function() {
        return game.scorecard[game.scorecard.length - 3].value;
    };

    let currentTotal = function() {
        return game.firstBowl() + game.secondBowl();
    };

    let gameOver = function() {
        if (game.scorecard.length > 20) {
            $('.button').hide();
        }
    };
});
