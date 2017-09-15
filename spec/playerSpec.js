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

  describe("#errorCheck", function() {
    it("throws an error if either entry is higher then 10", function() {
      expect(function() {
        player.errorCheck(11, 2);
      }).toThrow("entry cannot be higher then 10");
      expect(function() {
        player.errorCheck(5, 12);
      }).toThrow("entry cannot be higher then 10");
    });
    it("throws an error if the sum of entries is higher then 10", function() {
      expect(function() {
        player.errorCheck(6, 6);
      }).toThrow("the sum of entries cannot be higher then 10");
    });
  });

  describe("#setFrameVariables", function() {
    it("sets the variable for a frame", function() {
      player.entry(3, 4);
      expect(player.currentFrame).toEqual(
        player.framesArray[player.framesArray.length - 1])
    });
    it("sets the variable for the prev frame if one exists", function() {
      player.entry(3, 4);
      player.entry(5, 4);
      player.entry(3, 6);
      expect(player.prevFrame).toEqual(
        player.framesArray[player.framesArray.length - 2])
    });
  });
});
// describe("#outputScore", function() {
//   it("outputs the correct score", function() {
//     player.entry(3, 5);
//     expect(function() {
//       player.outputScore();
//     }).toReturn([3, 5, 8]);
//   });
// });
