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
    console.log(doubleStrike);
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
    if (spare) {
      addSpareBonus();
    }
    if (strike) {
      addStrikeBonus();
      if (doubleStrike) {
        addDoubleStrikeBonus();
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
      var newPrevTotal = getPrevTotal() + firstBowlBonus;
      editPrevTotalToPage(newPrevTotal);
      runningTotal += firstBowlBonus;
      spare = false;
    }
  };

  var addStrikeBonus = function() {
    if (strike) {
      currentTotalBonus = bowlIndexFromLast(1) + bowlIndexFromLast(2);
      var newPrevTotal = getPrevTotal() + currentTotalBonus;
      editPrevTotalToPage(newPrevTotal);
      runningTotal = newPrevTotal + currentTotalBonus;
      strike = false;
    }
  };

  var addDoubleStrikeBonus = function() {
    if (doubleStrike) {
      currentTotalBonus = bowlIndexFromLast(1) + bowlIndexFromLast(2);
      var newPrevTotal = getPrevTotal() + currentTotalBonus;
      editPrevTotalToPage(newPrevTotal);
      runningTotal = newPrevTotal + currentTotalBonus;
      strike = false;
    }
  };

  var getPrevTotal = function() {
    return parseInt(totalClass[frameTotalIndex - 1].innerText);
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

  var editPrevTotalToPage = function(total) {
    prevTotalSpan().innerText = total;
  };

  var bowlsSpan = function() {
    return allSpans[frameBowlIndex];
  };

  var totalSpan = function() {
    return totalClass[frameTotalIndex];
  };

  var prevTotalSpan = function() {
    return totalClass[frameTotalIndex - 1];
  };
});
