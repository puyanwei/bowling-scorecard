describe('Game', function() {
  var game;
  var frame;

  beforeEach(function() {
    game = new Game();
    frame = new Frame();
  })
  describe('#initialize', function() {
    it('starts with an empty match array', function() {
      expect(game.match).toEqual([]);
    });
    it('shows the number of frames played', function() {
      game.entry(4, 5);
      game.entry(4, 5);
      expect(game.framesPlayed).toEqual(2);
    });
    it('running score starts at zero', function() {
      expect(game.runningScore).toEqual(0);
    });
    it('shows the running total score', function() {
      game.entry(3, 5);
      game.entry(3, 5);
      expect(game.runningScore).toEqual(16)
    });
  });

  describe('#entry', function() {
    it('adds a frame to the match array', function() {
      game.entry(4, 5);
      game.entry(4, 5);
      expect(game.framesPlayed).toEqual(2);
    });
    it('inputs a strike to the frame', function() {
      game.entry(4, 5);
      game.entry(10);
      expect(game.match[1].strike).toBe(true);
    });
    it('throws an error if sum of entries are more then 10', function() {
      expect(function() {
        game.entry(5, 6)
      }).toThrow("Entries cannot be a sum of over 10")
    });
  });

  describe('#prevCalcs', function() {
    it('shows the previous first bowl points', function() {
      game.entry(4, 6)
      game.entry(5, 2)
      expect(game.prevFirstBowl).toEqual(4)
    });
    it('shows the previous two bowls points', function() {
      game.entry(4, 6)
      game.entry(5, 2)
      expect(game.prevTwoBowls).toEqual(10)
    });
  });
  // describe('#tally', function () {
  //   it('outputs the correct score after a spare', function () {
  //     game.entry(4, 6)
  //     game.entry(3, 6)
  //     expect(game.runningScore).toEqual(22)
  //   });
  // });
});
