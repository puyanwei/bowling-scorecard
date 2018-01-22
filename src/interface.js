$(document).ready(() => {
  var frameScoreIndex = 0;
  var frameTotalIndex = 0;
  var allBowls = [];

  $(".button").click(function() {
    var bowls = $("span")[frameScoreIndex];
    var buttonValue = $(this).val();
    addScoreToPage(bowls, buttonValue);
    calculateTotals(bowls);
    frameScoreIndex++;
  });

  var calculateTotals = function(bowls) {
    var total;
    score = convertStringToNumber(bowls.innerText);
    allBowls.push(score);
    if (hasEvenIndex(allBowls)) {
      total = sumArray(allBowls);
      addTotalToPage(total);
      frameTotalIndex++;
    }
  };

  var convertStringToNumber = function(string) {
    return parseInt(string);
  };

  var hasEvenIndex = function(array) {
    return array.length % 2 == 0;
  };

  var sumArray = function(array) {
    return array.reduce((a, b) => a + b, 0);
  };

  var addScoreToPage = function(bowls, buttonValue) {
    bowls.innerText = buttonValue;
  };

  var addTotalToPage = function(total) {
    $(".total")[frameTotalIndex].innerText = total;
  };
});
