$(document).ready(() => {
  var frameScoreIndex = 0;
  var frameTotalIndex = 0;
  var scoreCardArray = [];
  var allSpans = $("span");
  var totalClass = $(".total");

  var bowlsSpan = function() {
    return allSpans[frameScoreIndex];
  };

  var totalSpan = function() {
    return totalClass[frameTotalIndex];
  };

  $(".button").click(function() {
    var bowlValue = $(this).val();
    updateScore(bowlValue);
  });

  var updateScore = function(bowlValue) {
    bowlValue = symbolOrNumber(bowlValue);
    scoreCardArray.push(bowlValue);
    hideButtonsIfSumOverTen(bowlValue);
    addSingleScoreToPage(bowlValue);
    ifStrike(bowlValue);
    calculateTotals(bowlValue);
    frameScoreIndex++;
  };

  var calculateTotals = function(bowlValue) {
    var total;
    if (hasEvenIndex(scoreCardArray)) {
      total = sumArray(scoreCardArray);
      addTotalToPage(total);
      frameTotalIndex++;
      resetButtons();
    }
  };

  var symbolOrNumber = function(bowlValue) {
    if (bowlValue === "X") {
      return 10;
    } else {
      return parseInt(bowlValue);
    }
  };

  var ifStrike = function(bowlValue) {
    if (bowlValue === 10) {
      frameScoreIndex++;
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
