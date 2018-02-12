$(document).ready(() => {
  var allSpans = $("span");
  var totalClass = $(".total");
  var frameTotalIndex = 0;
  var frameBowlIndex = 0;
  var scoreCardArray = [];
  var spare = false;
  var strike = false;
  var doubleStrike = false;
  var runningTotal = 0;

  $(".button").click(function() {
    var bowlValue = $(this).val();
    if (isTenthFrame()) {
      frameTen(bowlValue);
    } else {
      updateBowls(bowlValue);
      updateTotals();
    }
  });

  var updateBowls = function(bowlValue) {
    bowlValue = parseInt(bowlValue);
    scoreCardArray.push(bowlValue);
    hideButtonsIfSumOverTen(bowlValue);
    addSingleScoreToPage(bowlValue);
    ifStrikeNextBowlZero(bowlValue);
    frameBowlIndex++;
  };

  var updateTotals = function() {
    if (isEven(frameBowlIndex)) {
      addBowlsToTotal();
      addBonusToTotals();
      addTotalToPage(runningTotal, 0);
      spareOrStrikeChecker();
      resetButtons();
      frameTotalIndex++;
    }
  };

  var isTenthFrame = function() {
    return frameBowlIndex > 17;
  };

  var frameTen = function(bowlValue) {
    addBonusToTotals();
    updateBowls(bowlValue);
    frameTenNoThird();
    frameTenSpare();
    finalScore();
  };

  var finalScore = function() {
    if (frameBowlIndex > 20) {
      runningTotal += thirdBowlFrameTen();
      addTotalToPage(runningTotal, 0);
      console.log(runningTotal, scoreCardArray);
      $(".button").hide();
    }
  };

  var frameTenNoThird = function() {
    if (
      firstBowlFrameTen() + secondBowlFrameTen() !== 10 &&
      firstBowlFrameTen() !== 10 &&
      secondBowlFrameTen() !== undefined
    ) {
      addSingleScoreToPage(0);
      scoreCardArray.push(0);
      console.log(frameTenTotal(), runningTotal, "don't get a third strike");
    }
  };

  var frameTenSpare = function() {
    if (
      firstBowlFrameTen() + secondBowlFrameTen() === 10 &&
      firstBowlFrameTen() !== 10
    ) {
      $(".button").show();
    }
  };

  var addBonusToTotals = function() {
    if (spare) {
      addSpareBonus();
    }
    if (strike) {
      addStrikeBonus();
    }
    if (doubleStrike) {
      addDoubleStrikeBonus();
    }
  };

  var addBowlsToTotal = function() {
    runningTotal += currentTotal();
  };

  var spareOrStrikeChecker = function() {
    isStrike();
    isSpare();
    isDoubleStrike();
  };

  var isSpare = function() {
    if (currentTotal() === 10 && secondBowl() !== 0) {
      spare = true;
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
    if (bowlValue === 10 && isEven(frameBowlIndex) && !isTenthFrame()) {
      nextBowlZero();
    }
  };

  var nextBowlZero = function() {
    frameBowlIndex++;
    addSingleScoreToPage(0);
    scoreCardArray.push(0);
  };

  var addSpareBonus = function() {
    if (spare) {
      var newPrevTotal = getTotal(frameTotalIndex - 1) + firstBowl();
      runningTotal = newPrevTotal + currentTotal();
      addTotalToPage(newPrevTotal, 1);
      spare = false;
    }
  };

  var addStrikeBonus = function() {
    if (strike) {
      var newPrevTotal = getTotal(frameTotalIndex - 1) + currentTotal();
      runningTotal = newPrevTotal + currentTotal();
      addTotalToPage(newPrevTotal, 1);
      if (firstBowl() !== 10) {
        strike = false;
      }
    }
  };

  var addDoubleStrikeBonus = function() {
    var newPrevTwoTotal = getTotal(frameTotalIndex - 2) + firstBowl();
    var newPrevTotal = getTotal(frameTotalIndex - 1) + firstBowl();
    runningTotal = newPrevTotal + currentTotal();
    addTotalToPage(newPrevTwoTotal, 2);
    addTotalToPage(newPrevTotal, 1);
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
    $(".button").show();
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
    return allSpans[frameBowlIndex];
  };

  var totalSpan = function(indexFromEnd) {
    return totalClass[frameTotalIndex - indexFromEnd];
  };

  var firstBowlFrameTen = function() {
    return scoreCardArray[18];
  };

  var secondBowlFrameTen = function() {
    return scoreCardArray[19];
  };

  var thirdBowlFrameTen = function() {
    return scoreCardArray[20];
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
    return scoreCardArray[scoreCardArray.length - index];
  };

  var currentTotal = function() {
    return firstBowl() + secondBowl();
  };

  var gameOver = function() {
    if (scoreCardArray.length > 20) {
      $(".button").hide();
    }
  };
});
