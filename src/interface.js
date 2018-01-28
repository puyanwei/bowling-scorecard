$(document).ready(() => {
  var frameBowlIndex = 0;
  var frameTotalIndex = 0;
  var scoreCardArray = [];
  var allSpans = $("span");
  var totalClass = $(".total");

  var bowlsSpan = function() {
    return allSpans[frameBowlIndex];
  };

  var totalSpan = function() {
    return totalClass[frameTotalIndex];
  };

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
    calculateTotals(bowlValue);
    frameBowlIndex++;
  };

  var calculateTotals = function(bowlValue) {
    if (hasEvenIndex(scoreCardArray)) {
      var total = sumArray(scoreCardArray);
      addTotalToPage(total);
      isSpare();
      frameTotalIndex++;
      resetButtons();
    }
  };

  var isSpare = function() {
    var firstBowl = scoreCardArray[frameBowlIndex - 1];
    var secondBowl = scoreCardArray[frameBowlIndex];
    if (firstBowl + secondBowl === 10 && firstBowl !== 0 && secondBowl !== 0) {
      console.log("its a spare");
    }
  };

  var isStrike = function() {
    console.log("its a strike");
  };

  var ifStrikeNextBowlZero = function(bowlValue) {
    if (bowlValue === 10) {
      isStrike();
      frameBowlIndex++;
      addSingleScoreToPage(0);
      scoreCardArray.push(0);
    }
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
});
