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
      console.log(runningTotal);
      addTotalToPage(runningTotal, 0);
      spareOrStrikeChecker();
      IsTenthFrame();
      resetButtons();
      frameTotalIndex++;
    }
  };

  var IsTenthFrame = function() {
    if (scoreCardArray.length === 20) {
      thirdBowl();
    }
  };

  var thirdBowl = function() {
    if (firstBowl() + secondBowl() !== 10) {
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
      addStrikeBonus(currentTotal());
    }
  };

  var addBowlsToTotal = function() {
    runningTotal += currentTotal();
  };

  var spareOrStrikeChecker = function() {
    isStrike();
    isSpare();
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

  var addSpareBonus = function() {
    if (spare) {
      var newPrevTotal = getNewPrevTotal(1) + firstBowl();
      runningTotal = newPrevTotal + currentTotal();
      addTotalToPage(newPrevTotal, 1);
      spare = false;
    }
  };

  var addStrikeBonus = function() {
    // var currentFirstBowl = bowlIndexFromLast(2);
    // if (strike) {
    //   var newPrevTotal = editPrevFrameTotal();
    //   addTotalToPage(newPrevTotal, 1);
    //   runningTotal = newPrevTotal + currentTotal();
    //   if (currentFirstBowl !== 10) {
    //     strike = false;
    //   }
    // }
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

  var hasEvenIndex = function(array) {
    return array.length % 2 == 0;
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

  var prevTotal = function() {
    return totalClass();
  };
});
