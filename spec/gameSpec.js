describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  })

  describe('#initialize', function() {
    it('starts with an empty array called score at a new game', function() {
      expect(game.score).toEqual([]);
    })
    it('has a frame number counter, which goes up by one each time you complete an entry', function() {
      game.entry(4, 5);
      expect(game.frameNumber).toEqual(1);
      game.entry(3, 6);
      expect(game.frameNumber).toEqual(2);
      game.entry(4, 5);
      expect(game.frameNumber).toEqual(3);
      game.entry(3, 6);
      expect(game.frameNumber).toEqual(4);
    });
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
        game.entry(9, 5);
      }).toThrow("scores cannot be a sum of over 10");
    });
    it('single entrys are strikes', function() {
      game.entry(10);
      expect(game.score).toEqual([
        [10, ""]
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
  describe('#totalPerFrame', function() {
    it('shows the current total score and puts into an array', function() {
      game.entry(4, 5);
      console.log("FrameNo " + game.frameNumber);
      console.log("RunScore " + game.runningScore);
      console.log("FrameTot " + game.frameTotal);
      game.entry(3, 6);
      console.log("FrameNo " + game.frameNumber);
      console.log("RunScore " + game.runningScore);
      console.log("FrameTot " + game.frameTotal);
      game.entry(4, 4);
      console.log("FN " + game.frameNumber);
      console.log("RS " + game.runningScore);
      console.log("RT " + game.frameTotal);
      expect(game.runningScore).toEqual([0, 9, 18, 26]);
    });
  });
  // describe('#show', function() {
  //   it('converts the spares and strikes into symbols', function() {
  //     game.entry(4, 6);
  //     game.entry(10);
  //     expect(game.displayScore).toEqual([
  //       [4, "/"],
  //       ["X", ""]
  //     ]);
  //   });
  // });
});
