$(document).ready(() => {
  var allSpans = $("span");
  var totalClass = $(".total");
  var frameBowlIndex = 0;
  var frameTotalIndex = 0;
  var scoreCardArray = [];
  var spare = false;
  var strike = false;
  var runningTotal = 0;
  var newPrevTotal;

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
      // var total = sumArray(scoreCardArray);
      var total = addBowlsToTotal();
      // total = addSpareBonus();
      addTotalToPage(total);
      isSpare();
      frameTotalIndex++;
      resetButtons();
    }
  };

  var addBowlsToTotal = function() {
    var currentFrameTotal =
      scoreCardArray[scoreCardArray.length - 1] +
      scoreCardArray[scoreCardArray.length - 2];
    runningTotal = currentFrameTotal + runningTotal;
    return runningTotal;
  };

  var isSpare = function() {
    var firstBowl = scoreCardArray[frameBowlIndex - 1];
    var secondBowl = scoreCardArray[frameBowlIndex];

    if (firstBowl + secondBowl === 10 && secondBowl !== 0) {
      spare = true;
    }
  };

  var isStrike = function() {
    strike = true;
  };

  var ifStrikeNextBowlZero = function(bowlValue) {
    if (bowlValue === 10 && !hasEvenIndex(scoreCardArray)) {
      isStrike();
      frameBowlIndex++;
      addSingleScoreToPage(0);
      scoreCardArray.push(0);
    }
  };

  // var addSpareBonus = function(total) {
  //   if (spare) {
  //     var currentFrameTotal =
  //       scoreCardArray[scoreCardArray.length - 1] +
  //       scoreCardArray[scoreCardArray.length - 2];
  //     newPrevTotal =
  //       scoreCardArray[scoreCardArray.length - 3] +
  //       scoreCardArray[scoreCardArray.length - 4] +
  //       scoreCardArray[scoreCardArray.length - 2];
  //     addPrevTotalToPage(newPrevTotal);
  //     console.log(newPrevTotal + currentFrameTotal);
  //     return newPrevTotal + currentFrameTotal;
  //   }
  // };

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

  var addPrevTotalToPage = function(total) {
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
