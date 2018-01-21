$(document).ready(() => {
  var player = new Player();
  var frame = new Frame();
  var number = 0;
  var bowls = document.getElementsByTagName("span");

  $(".button").on("click", () => {
    console.log(number);
    bowls[number].innerText = "hello";
    number++;
  });
});
