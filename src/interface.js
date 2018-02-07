$(document).ready(() => {
  var allSpans = $("span");
  var totalClass = $(".total");
  var frameBowlIndex = 0;
  var frameTotalIndex = 0;
  var scoreCardArray = [];
  var spare = false;
  var strike = false;
  var doubleStrike = false;
  var runningTotal = 0;

  $(".button").click(function() {
    var bowlValue = $(this).val();
    updateScore(bowlValue);
  });

  var updateScore = function(bowlValue) {
    bowlValue = parseInt(bowlValue);
    scoreCardArray.push(bowlValue);
    hideButtonsIfSumOverTen(bowlValue);
    addSingleScoreToPage(bowlValue);
    ifStrikeNextBowlZero(bowlValue);
    calculateTotals();
    frameBowlIndex++;
  };

  var calculateTotals = function() {
    if (hasEvenIndex(scoreCardArray)) {
      addBowlsToTotal();
      addBonus();
      addTotalToPage(runningTotal);
      spareOrStrikeChecker();
      IsTenthFrame();
      frameTotalIndex++;
      resetButtons();
    }
  };

  var IsTenthFrame = function() {
    if (scoreCardArray.length === 20) {
      thirdBowl();
    }
  };

  var thirdBowl = function() {
    var firstBowl = bowlIndexFromLast(2);
    var secondBowl = bowlIndexFromLast(1);
    if (firstBowl + secondBowl !== 10) {
      frameBowlIndex++;
      addSingleScoreToPage(0);
      scoreCardArray.push(0);
    }
  };

  var addBonus = function() {
    currentTotalBonus = bowlIndexFromLast(1) + bowlIndexFromLast(2);
    if (spare) {
      addSpareBonus();
    }
    if (strike) {
      addStrikeBonus(currentTotalBonus);
      if (doubleStrike) {
        addDoubleStrikeBonus(currentTotalBonus);
      }
    }
  };

  var addBowlsToTotal = function() {
    var currentFrameTotal = bowlIndexFromLast(1) + bowlIndexFromLast(2);
    runningTotal += currentFrameTotal;
  };

  var bowlIndexFromLast = function(index) {
    return scoreCardArray[scoreCardArray.length - index];
  };

  var spareOrStrikeChecker = function() {
    var firstBowl = bowlIndexFromLast(2);
    var secondBowl = bowlIndexFromLast(1);
    isStrike(firstBowl, secondBowl);
    isSpare(firstBowl, secondBowl);
  };

  var isSpare = function(firstBowl, secondBowl) {
    if (firstBowl + secondBowl === 10 && secondBowl !== 0) {
      spare = true;
    }
  };

  var isStrike = function(firstBowl, secondBowl) {
    if (firstBowl === 10) {
      strike = true;
      if (bowlIndexFromLast(4) === 10) {
        doubleStrike = true;
      }
    }
  };

  var ifStrikeNextBowlZero = function(bowlValue) {
    if (bowlValue === 10 && !hasEvenIndex(scoreCardArray)) {
      frameBowlIndex++;
      nextBowlZero();
    }
  };

  var nextBowlZero = function() {
    addSingleScoreToPage(0);
    scoreCardArray.push(0);
  };

  var addSpareBonus = function(total) {
    if (spare) {
      var firstBowlBonus = bowlIndexFromLast(2);
      var onePrevTotal = getPrevTotal(1) + firstBowlBonus;
      editPrevTotalToPage(onePrevTotal);
      runningTotal += firstBowlBonus;
      spare = false;
    }
  };

  var addStrikeBonus = function(currentTotalBonus) {
    if (strike) {
      var onePrevTotal = getPrevTotal(1) + currentTotalBonus;
      editPrevTotalToPage(onePrevTotal, 1);
      runningTotal = onePrevTotal + currentTotalBonus;
      strike = false;
    }
  };

  var addDoubleStrikeBonus = function(currentTotalBonus) {
    if (doubleStrike) {
      var twoPrevTotal = getPrevTotal(2) + currentTotalBonus;
      editPrevTotalToPage(twoPrevTotal, 2);
      // var onePrevTotal = getPrevTotal(1) + currentTotalBonus;
      // editPrevTotalToPage(newPrevTotal, 1);
      // runningTotal = onePrevTotal + currentTotalBonus;
      doubleStrike = false;
    }
  };

  var getPrevTotal = function(prevNumber) {
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

  var hasEvenIndex = function(array) {
    return array.length % 2 == 0;
  };

  var sumArray = function(array) {
    return array.reduce((a, b) => a + b, 0);
  };

  var addSingleScoreToPage = function(bowlValue) {
    bowlsSpan().innerText = bowlValue;
  };

  var addTotalToPage = function(total) {
    totalSpan().innerText = total;
  };

  var editPrevTotalToPage = function(total, prevNumber) {
    prevTotalSpan(prevNumber).innerText = total;
  };

  var bowlsSpan = function() {
    return allSpans[frameBowlIndex];
  };

  var totalSpan = function() {
    return totalClass[frameTotalIndex];
  };

  var prevTotalSpan = function(prevNumber) {
    return totalClass[frameTotalIndex - prevNumber];
  };
});
