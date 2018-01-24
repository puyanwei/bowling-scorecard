$(document).ready(() => {
  var frameScoreIndex = 0;
  var frameTotalIndex = 0;
  var allBowls = [];

  $(".button").click(function() {
    var bowlsSpan = $("span")[frameScoreIndex];
    var buttonValue = parseInt($(this).val());
    addScoreToPage(bowlsSpan, buttonValue);
    hideButtonsIfSumOverTen(buttonValue);
    calculateTotals(buttonValue);
    frameScoreIndex++;
  });

  var calculateTotals = function(score) {
    var total;
    console.log(score);
    console.log(allBowls);

    allBowls.push(score);
    if (hasEvenIndex(allBowls)) {
      total = sumArray(allBowls);
      addTotalToPage(total);
      frameTotalIndex++;
      resetButtons();
    }
    if (score === 10) {
      calculateTotals(0);
      console.log("is Ten");
    }
  };

  var hideButtonsIfSumOverTen = function(buttonValue) {
    var remainingPins = 10 - buttonValue;
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

  var addScoreToPage = function(bowlsSpan, buttonValue) {
    bowlsSpan.innerText = buttonValue;
  };

  var addTotalToPage = function(total) {
    $(".total")[frameTotalIndex].innerText = total;
  };
});
