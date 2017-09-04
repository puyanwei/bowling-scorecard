describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  })

  describe('#initialize', function() {
    it('starts with an empty array called score at a new game', function() {
      expect(game.bowlsPerFrame).toEqual([]);
    })
    it('has a frame number counter, which goes up by one each time you complete an entry', function() {
      for (var i = 0; i < 4; i++) {
        game.entry(4, 5);
      }
      expect(game.frameNumber).toEqual(4);
    });
  });

  describe('#entry', function() {
    it('enters a score into the first frame', function() {
      game.entry(4, 5);
      expect(game.bowlsPerFrame).toEqual([
        [4, 5]
      ]);
    });

    it('enters another score which goes into the 2nd frame', function() {
      game.entry(4, 5);
      game.entry(3, 6);
      expect(game.bowlsPerFrame).toEqual([
        [4, 5],
        [3, 6]
      ]);
    });
    it('throws an error if scores add up to over ten', function() {
      expect(function() {
        game.entry(9, 5);
      }).toThrow("scores cannot be a sum of over 10");
    });
    it('single entrys are strikes', function() {
      game.entry(10);
      console.log(game.bowlsPerFrame);
      expect(game.bowlsPerFrame).toEqual([
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
    it('only the tenth frame can take three arguments', function() {
      expect(function() {
        game.entry(4, 5, 9)
      }).toThrow("only the tenth frame can take 3 arguments");
    });
  });

  describe('#sum', function() {
    it('shows the current total score and puts into an array', function() {
      for (var i = 0; i < 3; i++) {
        game.entry(4, 5);
      }
      expect(game.currentScore).toEqual([0, 9, 18, 27]);
    });
  });
  describe('#_spare', function() {
    it('calculates the points correctly for a spare', function() {
      game.entry(4, 5);
      game.entry(5, 5);
      game.entry(4, 5);
      expect(game.currentScore).toEqual([0, 9, 23, 32])
    });
  });

  describe('#_strike', function() {
    it('calculates the points correctly for a strike', function() {
      game.entry(4, 5);
      game.entry(10);
      game.entry(4, 5);

      expect(game.currentScore).toEqual([0, 9, 28, 37])
    });
  });
});

// console.log("CurScore  " + game.currentScore);
// console.log("FrameNo " + game.frameNumber);
// console.log("FrameTot " + game.framesTotal);
// console.log("Strike? " + game.strike);
// console.log("Spare? " + game.spare);
