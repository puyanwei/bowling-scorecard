$(document).ready(() => {
    game = new Game();
    var allSpans = $('span');
    var totalClass = $('.total');

    $('.button').click(function() {
        var bowlValue = $(this).val();
        game.addBowl(bowlValue);
        if (isTenthFrame()) {
            frameTen(bowlValue);
        } else {
            updateBowls(bowlValue);
            updateTotals();
        }
    });

    var updateBowls = function(bowlValue) {
        bowlValue = parseInt(bowlValue);
        game.scorecard.push(bowlValue);
        hideButtonsIfSumOverTen(bowlValue);
        addSingleScoreToPage(bowlValue);
        ifStrikeNextBowlZero(bowlValue);
        game.frameBowlIndex++;
    };

    var updateTotals = function() {
        if (isEven(game.frameBowlIndex)) {
            addBowlsToTotal();
            addBonusToTotals();
            addTotalToPage(game.runningTotal, 0);
            spareOrStrikeChecker();
            resetButtons();
            game.frameTotalIndex++;
        }
    };

    var isTenthFrame = function() {
        return game.frameBowlIndex > 17;
    };

    var frameTen = function(bowlValue) {
        addBonusToTotals();
        updateBowls(bowlValue);
        frameTenNoThird();
        frameTenSpare();
        finalScore();
    };

    var finalScore = function() {
        if (game.frameBowlIndex > 20) {
            addTotalToPage(game.runningTotal, 0);
            $('.button').hide();
        }
    };

    var frameTenBonuses = function() {
        console.log(game.spare, strike, doubleStrike);
    };

    var frameTenNoThird = function() {
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

    var frameTenSpare = function() {
        if (
            firstBowlFrameTen() + secondBowlFrameTen() === 10 &&
            firstBowlFrameTen() !== 10
        ) {
            $('.button').show();
        }
    };

    var addBonusToTotals = function() {
        addSpareBonus();
        addStrikeBonus();
        addDoubleStrikeBonus();
    };

    var addBowlsToTotal = function() {
        game.runningTotal += currentTotal();
    };

    var spareOrStrikeChecker = function() {
        isStrike();
        isSpare();
        isDoubleStrike();
    };

    var isSpare = function() {
        if (currentTotal() === 10 && secondBowl() !== 0) {
            game.spare = true;
        }
    };

    var isStrike = function() {
        if (firstBowl() === 10) {
            strike = true;
        }
    };

    var isDoubleStrike = function() {
        if (firstBowl() === 10 && prevFirstBowl() === 10) {
            doubleStrike = true;
        }
    };

    var ifStrikeNextBowlZero = function(bowlValue) {
        if (
            bowlValue === 10 &&
            isEven(game.frameBowlIndex) &&
            !isTenthFrame()
        ) {
            nextBowlZero();
        }
    };

    var nextBowlZero = function() {
        game.frameBowlIndex++;
        addSingleScoreToPage(0);
        game.scorecard.push(0);
    };

    var addSpareBonus = function() {
        if (game.spare) {
            var newPrevTotal = getTotal(frameTotalIndex - 1) + firstBowl();
            game.runningTotal = newPrevTotal + currentTotal();
            addTotalToPage(newPrevTotal, 1);
            game.spare = false;
        }
    };

    var addStrikeBonus = function() {
        if (game.strike) {
            var newPrevTotal = getTotal(frameTotalIndex - 1) + currentTotal();
            game.runningTotal = newPrevTotal + currentTotal();
            addTotalToPage(newPrevTotal, 1);
            if (firstBowl() !== 10) {
                game.strike = false;
            }
        }
    };

    var addDoubleStrikeBonus = function() {
        if (game.doubleStrike) {
            var newPrevTwoTotal = getTotal(frameTotalIndex - 2) + firstBowl();
            var newPrevTotal = getTotal(frameTotalIndex - 1) + firstBowl();
            game.runningTotal = newPrevTotal + currentTotal();
            addTotalToPage(newPrevTwoTotal, 2);
            addTotalToPage(newPrevTotal, 1);
        }
    };

    var getTotal = function(frameTotalIndex) {
        return parseInt(totalClass[frameTotalIndex].innerText);
    };

    var hideButtonsIfSumOverTen = function(bowlValue) {
        if (bowlValue !== 10) {
            var remainingPins = 10 - bowlValue;
            var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

            array.forEach(function(value) {
                if (value > remainingPins) {
                    $(`#${value}`).hide();
                }
            });
        }
    };

    var resetButtons = function() {
        $('.button').show();
    };

    var isEven = function(number) {
        return number % 2 == 0;
    };

    var addSingleScoreToPage = function(bowlValue) {
        bowlsSpan().innerText = bowlValue;
    };

    var addTotalToPage = function(total, indexFromEnd) {
        totalSpan(indexFromEnd).innerText = total;
    };

    var bowlsSpan = function() {
        return allSpans[game.frameBowlIndex];
    };

    var totalSpan = function(indexFromEnd) {
        return totalClass[game.frameTotalIndex - indexFromEnd];
    };

    var firstBowlFrameTen = function() {
        return game.scorecard[18];
    };

    var secondBowlFrameTen = function() {
        return game.scorecard[19];
    };

    var thirdBowlFrameTen = function() {
        return game.scorecard[20];
    };

    var frameTenTotal = function() {
        firstBowlFrameTen() + secondBowlFrameTen() + thirdBowlFrameTen();
    };

    var firstBowl = function() {
        return bowlIndexFromLast(2);
    };
    var secondBowl = function() {
        return bowlIndexFromLast(1);
    };

    var prevFirstBowl = function() {
        return bowlIndexFromLast(4);
    };
    var prevSecondBowl = function() {
        return bowlIndexFromLast(3);
    };

    var bowlIndexFromLast = function(index) {
        return game.scorecard[game.scorecard.length - index];
    };

    var currentTotal = function() {
        return firstBowl() + secondBowl();
    };

    var gameOver = function() {
        if (game.scorecard.length > 20) {
            $('.button').hide();
        }
    };
});
