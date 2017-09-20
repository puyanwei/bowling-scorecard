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

  describe("#_frameNumber", function() {
    it("counts the number of frames played", function() {
      player.entry(3, 4);
      player.entry(3, 4);
      expect(player._frameNumber()).toEqual(2);
    });
  });

  describe("#_prevTotalFrame", function() {
    it("shows the values of the previous frame", function() {
      player.entry(3, 5);
      player.entry(6, 2);
      expect(player._prevFrame().first).toEqual(3);
      expect(player._prevFrame().second).toEqual(5);
    });
  });

  // describe("#wasSpare", function() {
  //   it("adds the extra points of the first bowl to the total score if the previous bowl has a spare", function() {
  //     player.entry(5, 5);
  //     player.entry(4, 3);
  //     player.entry(0, 10);
  //     player.entry(2, 5);
  //     expect(player.outputScore()).toEqual([
  //       [5, 5, 14],
  //       [4, 3, 21],
  //       [0, 10, 33],
  //       [2, 5, 40]
  //     ]);
  //   });
  // });
  // describe("#wasStrike", function() {
  //   it("adds the extra points of two bowls to the total score if the previous bowl has a strike", function() {
  //     player.entry(10, 0);
  //     player.entry(5, 3);
  //     player.entry(10, 0);
  //     player.entry(3, 6);
  //     expect(player.outputScore()).toEqual([
  //       [10, 0, 18],
  //       [5, 3, 26],
  //       [10, 0, 45],
  //       [3, 6, 54]
  //     ]);
  //   });
  // });
  //   describe("#outputScore", function() {
  //     it("outputs all bowls and the running score", function() {
  //       player.entry(3, 5);
  //       player.entry(4, 5);
  //       expect(player.outputScore()).toEqual([[3, 5, 8], [4, 5, 17]]);
  //     });
  //   });
});
