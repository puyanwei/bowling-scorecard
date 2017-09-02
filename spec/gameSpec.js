describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  })

  describe('#initialize', function() {
    it('starts with an empty array at a new game', function() {
      expect(game.score).toEqual([]);
    })
  });

  describe('#entry', function() {
    it('enters a score into the first frame', function() {
      game.entry(4, 5);
      expect(game.score).toEqual([
        [4, 5]
      ]);
    });

    it('enters another score which goes into the 2nd frame', function() {
      game.entry(4, 5);
      game.entry(3, 6);
      expect(game.score).toEqual([
        [4, 5],
        [3, 6]
      ]);
    });
    it('throws an error if scores add up to over ten', function() {
      expect(function() {
        game.entry(9, 5)
      }).toThrow("scores cannot be a sum of over 10");
    });
    it('single entrys are strikes', function() {
      game.entry(10);
      expect(game.score).toEqual([
        [10, 0]
      ])
    });
    it('single entrys are only strikes', function() {
      expect(function() {
        game.entry(9)
      }).toThrow("single entries can only be strikes");
    });
    it('the game is over after 10 frames', function() {
      for (var i = 0; i < 10; i++) {
        game.entry(4, 5);
      }
      expect(function() {
        game.entry(4, 5)
      }).toThrow("no more entries allowed as game over");
    });
  });
});
