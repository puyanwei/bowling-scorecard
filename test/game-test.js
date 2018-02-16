describe("#Game", function() {
  beforeEach(function() {
    game = new Game();
  });

  describe("#initialize", function() {
    it("bowls array to start out empty", function() {
      expect(game.scoreCardArray).toEqual([]);
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
});
