$(document).ready(() => {
  var frameScoreIndex = 0;
  var frameTotalIndex = 0;
  var scoreCardArray = [];
  var allSpans = $("span");
  var totalClass = $(".total");

  $(".button").click(function() {
    var bowlValue = parseInt($(this).val());
    updateScore(bowlValue);
  });

  var updateScore = function(bowlValue) {
    addScoreToPage(bowlValue);
    hideButtonsIfSumOverTen(bowlValue);
    calculateTotals(bowlValue);
    frameScoreIndex++;
  };

  var bowlsSpan = function() {
    return allSpans[frameScoreIndex];
  };

  var totalSpan = function() {
    return totalClass[frameTotalIndex];
  };

  var calculateTotals = function(score) {
    var total;
    scoreCardArray.push(score);
    if (hasEvenIndex(scoreCardArray)) {
      total = sumArray(scoreCardArray);
      addTotalToPage(total);
      frameTotalIndex++;
      resetButtons();
    }
  };

  var ifStrike = function(bowlValue) {
    if (bowlValue === 10) {
    }
  };

  var hideButtonsIfSumOverTen = function(bowlValue) {
    var remainingPins = 10 - bowlValue;
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    array.forEach(function(value) {
      if (value > remainingPins) {
        $(`#${value}`).hide();
      }
    });
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

  var addScoreToPage = function(bowlValue) {
    bowlsSpan().innerText = bowlValue;
    ifStrike(bowlValue);
  };

  var addTotalToPage = function(total) {
    totalSpan().innerText = total;
  };
});
