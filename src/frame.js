var Frame = function() {
  this.pins = 10;
}

Frame.prototype.bowl = function(knockedDown) {
  if (knockedDown > 10) {
    throw ("Cannot choose more then 10")
  }
  return this.pins = this.pins - knockedDown;
};

Frame.prototype.reset = function() {
  this.pins = 10;
};
