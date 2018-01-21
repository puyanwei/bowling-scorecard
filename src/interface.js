$(document).ready(() => {
  // var player = new Player();
  // var frame = new Frame();
  var number = 0;

  $(".button").click(function() {
    var bowls = document.getElementsByTagName("span");
    bowls[number].innerText = $(this).val();
    number++;
  });
});
