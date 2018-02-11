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
    updateBowls(bowlValue);
    updateTotals();
  });

  var updateBowls = function(bowlValue) {
    bowlValue = parseInt(bowlValue);
    scoreCardArray.push(bowlValue);
    hideButtonsIfSumOverTen(bowlValue);
    addSingleScoreToPage(bowlValue);
    frameBowlIndex++;
  };

  var updateTotals = function() {
    if (isEven(frameBowlIndex)) {
      addBowlsToTotal();
      addBonusToTotals();
      addTotalToPage(runningTotal, 0);
      spareOrStrikeChecker();
      tenthFrame();
      resetButtons();
      frameTotalIndex++;
    }
  };

  var isTenthFrame = function() {
    return frameBowlIndex > 18;
  };

  var tenthFrame = function() {
    if (isTenthFrame()) {
      if (firstBowl() + secondBowl() === 10) {
      }
      if (firstBowl() === 10) {
      }
      nextBowlZero();
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
    if (bowlValue === 10 && isEven(frameBowlIndex) && !tenthFrame()) {
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
      var newPrevTotal = getNewPrevTotal(1) + firstBowl();
      runningTotal = newPrevTotal + currentTotal();
      addTotalToPage(newPrevTotal, 1);
      spare = false;
    }
  };

  var addStrikeBonus = function() {
    if (strike) {
      var newPrevTotal = getNewPrevTotal(1) + currentTotal();
      runningTotal = newPrevTotal + currentTotal();
      addTotalToPage(newPrevTotal, 1);
      if (firstBowl() !== 10) {
        strike = false;
      }
    }
  };

  var addDoubleStrikeBonus = function() {
    var newPrevTwoTotal = getNewPrevTotal(2) + firstBowl();
    var newPrevTotal = getNewPrevTotal(1) + firstBowl();
    runningTotal = newPrevTotal + currentTotal();
    addTotalToPage(newPrevTwoTotal, 2);
    addTotalToPage(newPrevTotal, 1);
  };

  var getNewPrevTotal = function(prevNumber) {
    return parseInt(totalClass[frameTotalIndex - prevNumber].innerText);
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
    ifStrikeNextBowlZero(bowlValue);
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
