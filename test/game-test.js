describe("#Game", function() {
  beforeEach(function() {
    game = new Game();
    bowl = new Bowl();
  });

  describe("#initialize", function() {
    it("bowls array to start out empty", function() {
      expect(game.scorecard).toEqual([]);
    });
    it("frameScores array to start out empty", function() {
      expect(game.frameScores).toEqual([]);
    });
    it("runningTotal variable starts at zero", function() {
      expect(game.runningTotal).toEqual(0);
    });
    it("spare variable starts as false", function() {
      expect(game.spare).toBe(false);
    });
    it("strike variable starts as false", function() {
      expect(game.strike).toBe(false);
    });
  });

  describe("#addBowl", function() {
    it("adds a bowl object into scoreArray", function() {
      game.addBowl(5);
      game.addBowl(2);
      var arrayLength = game.scorecard.length;
      expect(arrayLength).toEqual(2);
      expect((game.scorecard[0].value = 5));
      expect((game.scorecard[1].value = 3));
    });
  });

  describe("#addFrameScore", function() {
    it("adds the frame totals to the frameScores array", function() {
      game.addBowl(5);
      game.addBowl(2);
      game.addBowl(4);
      game.addBowl(4);
      game.addFrameScore();
      expect(game.frameScores).toEqual([7, 8]);
    });
  });

  describe("#updateTotals", function() {
    it("updates the frame totals by adding up the previous frame's total", function() {
      game.frameScores = [7, 8, 12];
      game.updateTotals();
      expect(game.frameScores).toEqual([7, 15, 27]);
    });
  });
});