$(document).ready(() => {
  // var player = new Player();
  // var frame = new Frame();
  var number = 0;
  var bowls = document.getElementsByTagName("span");

  $(".button").click(function() {
    bowls[number].innerText = $(this).val();
    number++;
  });
});
