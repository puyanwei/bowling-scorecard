describe("Game", function() {
  var player;
  var frame;

  beforeEach(function() {
    player = new Player();
    // frame = new Frame();
  });

  describe("#entry", function() {
    it("entry creates a new frame and adds it to the game", function() {
      player.entry(3, 4);
      expect(player.framesArray[0].first).toEqual(3);
      expect(player.framesArray[0].second).toEqual(4);
    });
  });

  describe("#setFrameVariables", function() {
    it("sets the variable for a frame", function() {
      player.entry(3, 4);
      expect(player.currentFrame).toEqual(
        player.framesArray[player.framesArray.length - 1]
      );
    });
    it("sets the variable for the prev frame if one exists", function() {
      player.entry(3, 4);
      player.entry(5, 4);
      player.entry(3, 6);
      expect(player.prevFrame).toEqual(
        player.framesArray[player.framesArray.length - 2]
      );
    });
  });

  describe("#calculateTotal", function() {
    it("calculates the total running score", function() {
      player.entry(3, 5);
      player.entry(4, 4);
      player.entry(2, 6);
      player.outputScore();
      expect(player.runningTotal).toEqual(24);
    });
  });

  describe("#outputScore", function() {
    it("outputs bowls and the running score", function() {
      player.entry(3, 5);
      player.entry(4, 5);
      expect(player.outputScore()).toEqual([4, 5, 17]);
    });
  });
});
