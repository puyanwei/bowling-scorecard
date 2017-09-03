var Game = function() {
  this.bowlsPerFrame = [];
  // this.displayScore = [];
  this.runningScore = [0];
  this.spare = false;
  this.strike = false;
  this.frameNumber = 0;
  this.frameTotal = 0;
}

Game.prototype.entry = function(first, second = 0) {
  this.frameNumber++;
  this.frameTotal = first + second;
  if (arguments.length == 1 && first !== 10) {
    throw ("single entries can only be strikes");
  }
  if (first + second > 10) {
    throw ("scores cannot be a sum of over 10");
  }
  if (this.bowlsPerFrame.length > 9) {
    throw ("no more entries allowed as game over");
  }
  if (first == 10) {
    second = 0;
  }
  // this.show(first, second);
  this.sum(first, second);
  this.bowlsPerFrame.push([first, second]);
}

Game.prototype.sum = function(first, second) {
  if (first == 10) {
    this.strike = true;
    this.runningScore.push("");
  }
  // this.frameTotal = first + second;
  // if (this.frameTotal == 10) {
  //   this.spare == true;
  //   this.runningScore.push("");
  // }
  // if (this.spare == true) {
  //   this.runningScore[this.frameNumber - 1] = first + 10 + this.runningScore;
  // }
  if (this.frameNumber == 1) {
    this.runningScore[1] = this.frameTotal;
  } else {
    this.addSumToArr();
  }
}

Game.prototype.addSumToArr = function() {
  this.frameTotal = this.frameTotal + this.runningScore[this.frameNumber - 1];
  this.runningScore.push(this.frameTotal);
};



// Game.prototype.show = function(first, second) {
//   if (first + second == 10) {
//     second = "/";
//   }
//   if (first == 10) {
//     first = "X", second = "";
//   }
//   this.displayScore.push([first, second]);
// };
