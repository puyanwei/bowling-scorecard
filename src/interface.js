$(document).ready(() => {
  var frameNumberScore = 0;
  var frameNumberTotal = 0;
  allBowls = [];

  $(".button").click(function() {
    var bowls = $("span")[frameNumberScore];
    bowls.innerText = $(this).val();
    calculateTotals(bowls.innerText);
    frameNumberScore++;
  });

  var calculateTotals = function(score) {
    var total;
    var bowls = convertStringToNumber(score);
    allBowls.push(bowls);
    if (hasEvenIndex(allBowls)) {
      total = sumArray(allBowls);
      $(".total")[frameNumberTotal].innerText = total;
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
});
