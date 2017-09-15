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

  // describe("#calculateBonus", function() {
  //   it("adds the extra points to the total score if the previous bowl has a spare", function() {
  //     player.entry(5, 5);
  //     player.entry(4, 3);
  //   });
  // });

  describe("#outputScore", function() {
    it("outputs all bowls and the running score", function() {
      player.entry(3, 5);
      player.entry(4, 5);
      expect(player.outputScore()).toEqual([3, 5, 8][(4, 5, 17)]);
    });
  });
});
