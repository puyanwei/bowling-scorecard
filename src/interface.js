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
    var bowls = parseInt(score);
    allBowls.push(bowls);
    if (allBowls.length % 2 == 0) {
      total = allBowls.reduce((a, b) => a + b, 0);
      $(".total")[frameNumberTotal].innerText = total;
      frameNumberTotal++;
    }
  };
});
