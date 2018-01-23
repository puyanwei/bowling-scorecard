$(document).ready(() => {
  var frameScoreIndex = 0;
  var frameTotalIndex = 0;
  var allBowls = [];

  $(".button").click(function() {
    var bowlsSpan = $("span")[frameScoreIndex];
    var buttonValue = $(this).val();
    addScoreToPage(bowlsSpan, buttonValue);
    calculateTotals(bowlsSpan);
    frameScoreIndex++;
  });

  var calculateTotals = function(bowlsSpan) {
    var total;
    score = convertStringToNumber(bowlsSpan.innerText);
    allBowls.push(score);
    if (hasEvenIndex(allBowls)) {
      total = sumArray(allBowls);
      hideButtonsIfSumOverTen();
      addTotalToPage(total);
      frameTotalIndex++;
    }
  };

  var hideButtonsIfSumOverTen = function() {
    $(".button")
      .eq(4)
      .hide();
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

  var addScoreToPage = function(bowlsSpan, buttonValue) {
    bowlsSpan.innerText = buttonValue;
  };

  var addTotalToPage = function(total) {
    $(".total")[frameTotalIndex].innerText = total;
  };
});
