$(document).ready(() => {
  var number = 0;
  array = [];

  $(".button").click(function() {
    var bowls = $("span")[number];
    bowls.innerText = $(this).val();
    calculateTotals(bowls.innerText);
    number++;
  });

  var calculateTotals = function(score) {
    var total;
    var number = parseInt(score);
    array.push(number);
    if (array.length % 2 == 0) {
      total = array.reduce((a, b) => a + b, 0);
    } else {
      total = "";
    }
    $(".total")[0].innerText = total;
  };
});
