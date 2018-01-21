$(document).ready(() => {
  var player = new Player();
  var frame = new Frame();
  var bowls = document.getElementsByTagName("span");

  $(".button").on("click", () => {
    bowls[0].innerText = "hello";
  });
});
