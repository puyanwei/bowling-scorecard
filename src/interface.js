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
    var hiddenButtons = 10 - buttonValue;
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    array.forEach(function(element) {
      if (element > 10 - buttonValue) {
        $(`#${element}`).hide();
      }
    });

    // array.splice(0, buttonValue);
    // $(".button")
    //   .eq(buttonValue - 1)
    //   .hide();
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
