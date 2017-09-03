var Game = function() {
  this.score = [];
  // this.displayScore = [];
  this.runningScore = [0];
  this.spare = false;
  this.strike = false;
  this.frameNumber = 0
  this.frameTotal;
}

Game.prototype.entry = function(first, second = 0) {
  this.frameNumber++;
  if (arguments.length == 1 && first !== 10) {
    throw ("single entries can only be strikes");
  }
  if (first + second > 10) {
    throw ("scores cannot be a sum of over 10");
  }
  if (this.score.length > 9) {
    throw ("no more entries allowed as game over");
  }
  if (first + second == 10) {
    second = 0;
  }

  // this.show(first, second);
  this.sum(first, second);

  if (first + second == 10) {
    second = "";
  }
  this.score.push([first, second]);
}

Game.prototype.sum = function(first, second) {
  if (first == 10) {
    this.strike = true;
  }
  this.frameTotal = first + second;
  if (this.frameTotal == 10) {
    this.spare == true;
  }
  this.frameTotal = first + second;
  if (this.frameNumber == 1) {
    this.runningScore[1] = this.frameTotal;
  } else {
    this.frameTotal = this.frameTotal + this.runningScore[this.frameNumber - 1];
    this.runningScore.push(this.frameTotal);
  }
}

// Game.prototype.show = function(first, second) {
//   if (first + second == 10) {
//     second = "/";
//   }
//   if (first == 10) {
//     first = "X", second = "";
//   }
//   this.displayScore.push([first, second]);
// };
