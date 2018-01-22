$(document).ready(() => {
  var frameNumberScore = 0;
  var frameNumberTotal = 0;
  allBowls = [];

  $(".button").click(function() {
    var bowls = $("span")[frameNumberScore];
    var buttonValue = $(this).val();
    addScoreToPage(bowls, buttonValue);
    score = convertStringToNumber(bowls.innerText);
    calculateTotals(score);
    frameNumberScore++;
  });

  var calculateTotals = function(score) {
    var total;
    allBowls.push(score);
    if (hasEvenIndex(allBowls)) {
      total = sumArray(allBowls);
      addTotalToPage(total);
      frameNumberTotal++;
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
    $(".total")[frameNumberTotal].innerText = total;
  };
});
