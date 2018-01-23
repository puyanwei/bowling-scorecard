$(document).ready(() => {
  var frameScoreIndex = 0;
  var frameTotalIndex = 0;
  var allBowls = [];

  $(".button").click(function() {
    var bowlsSpan = $("span")[frameScoreIndex];
    buttonValue = $(this).val();
    addScoreToPage(bowlsSpan, buttonValue);
    hideButtonsIfSumOverTen(buttonValue);
    calculateTotals(bowlsSpan);
    frameScoreIndex++;
  });

  var calculateTotals = function(bowlsSpan) {
    var total;
    score = convertStringToNumber(bowlsSpan.innerText);
    allBowls.push(score);
    if (hasEvenIndex(allBowls)) {
      total = sumArray(allBowls);
      addTotalToPage(total);
      frameTotalIndex++;
      resetButtons();
    }
  };

  var hideButtonsIfSumOverTen = function(buttonValue) {
    $(".button")
      .eq(buttonValue - 1)
      .hide();
    console.log(10 - buttonValue);
  };

  var resetButtons = function() {
    $(".button").show();
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
