describe("Game", function() {
  var player;
  var frame;

  beforeEach(function() {
    player = new Player();
    frame = new Frame();
  });

  describe("#entry", function() {
    it("entry creates a new frame and adds it to the game", function() {
      player.entry(3, 4);
      console.log(player.allScores);
      expect(player.allScores).toContain(jasmine.any(Object));
      // expect(player.allScores).toEqual(jasmine.objectContaining([Object { strike: false, spare: false, first: 3, second: 4, frameTotal: 7 }]))
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

  describe('#outputsScore', function () {
    it('outputs the correct score', function () {
      player.entry(3, 5)
      expect(player.output).toEqual([3, 5, 8])
    });
  });
});
