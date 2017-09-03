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
  });
  describe('#sum', function() {
    it('shows the current total score and puts into an array', function() {
      game.entry(4, 5);
      game.entry(3, 6);
      game.entry(4, 4);
      expect(game.runningScore).toEqual([0, 9, 18, 26]);
    });
  });
  describe('#_spare', function() {
    it('spare does not put a current score', function() {
      game.entry(5, 5);
      console.log("RunScore " + game.runningScore);
      console.log("FrameNo " + game.frameNumber);
      console.log("FrameTot " + game.frameTotal);
      expect(game.runningScore).toEqual([""])
    });
    // it('adds the first entry to the previous frame total', function() {
    //   game.entry(6, 3);
    //   console.log("RunScore  " + game.runningScore);
    //   console.log("FrameNo " + game.frameNumber);
    //   console.log("FrameTot " + game.frameTotal);
    //   expect(game.runningScore).toEqual([16, 25]);
    // });
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

// console.log("RunScore" + game.runningScore);
// console.log("FrameNo" + game.frameNumber);
// console.log("FrameTot" + game.frameTotal);
