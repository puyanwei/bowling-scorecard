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

  describe("#_prevFrame", function() {
    it("shows the values of the previous frame", function() {
      player.entry(3, 5);
      player.entry(6, 2);
      expect(player._prevFrame().first).toEqual(3);
      expect(player._prevFrame().second).toEqual(5);
    });
  });

  describe("#_thisFrame", function() {
    it("shows the values of the current frame", function() {
      player.entry(3, 5);
      player.entry(6, 2);
      expect(player._currentFrame().first).toEqual(6);
      expect(player._currentFrame().second).toEqual(2);
    });
  });

  describe("_addToScoreArray", function() {
    it("outputs all bowls and the running score to the score array", function() {
      player.entry(3, 5);
      player.entry(4, 5);
      expect(player.outputScore()).toEqual([[3, 5, 8], [4, 5, 17]]);
    });
  });

  describe("#outputScore", function() {
    fit("outputs the score", function() {
      player.entry(4, 5);
      player.entry(3, 5);
      expect(player.outputScore()).toEqual([[4, 5, 9], [3, 5, 17]]);
    });
    it("outputs the correct score when more entries happen after score outputted once", function() {
      player.entry(4, 5);
      player.entry(3, 5);
      expect(player.outputScore()).toEqual([[4, 5, 9], [3, 5, 17]]);
      player.entry(3, 4);
      player.entry(3, 6);
      expect(player.outputScore()).toEqual([
        [4, 5, 9],
        [3, 5, 17],
        [3, 4, 24],
        [3, 6, 33]
      ]);
    });
  });

  describe("#_prevTotal", function() {
    it("returns the previous frame total score", function() {
      player.entry(3, 4);
      player.entry(3, 6);
      player.outputScore();
      expect(player._prevTotal()).toEqual(7);
    });
  });
});
