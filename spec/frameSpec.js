describe('Frame', function() {
  var frame;

  describe('#initialize', function() {
    it('shows the bowls per frame', function() {
      frame = new Frame(4, 3);
      expect(frame.bowlsPerFrame).toEqual([4, 3])
    });
    it('shows score for this frame', function() {
      frame = new Frame(4, 3);
      expect(frame.frameTotal).toEqual(7)
    });
  });
  describe('#isStrike', function() {
    it('inputs a strike to the frame', function() {
      frame = new Frame(10, 0)
      expect(frame.strike).toBe(true);
    });
  });
  describe('#isSpare', function() {
    it('inputs a spare to the frame', function() {
      frame = new Frame(4, 6)
      expect(frame.spare).toBe(true);
    });
  });
});
// describe('#entry', function() {
//   it('enters a score into the first frame', function() {
//     game.entry(4, 5);
//     expect(game.bowlsPerFrame).toEqual([
//       [4, 5]
//     ]);
//   });
//
//   it('enters another score which goes into the 2nd frame', function() {
//     game.entry(4, 5);
//     game.entry(3, 6);
//     expect(game.bowlsPerFrame).toEqual([
//       [4, 5],
//       [3, 6]
//     ]);
//   });
//   it('throws an error if scores add up to over ten', function() {
//     expect(function() {
//       game.entry(9, 5);
//     }).toThrow("scores cannot be a sum of over 10");
//   });
//   it('single entrys are strikes', function() {
//     game.entry(10);
//     expect(game.bowlsPerFrame).toEqual([
//       [10, 0]
//     ])
//   });
//   it('single entrys are only strikes', function() {
//     expect(function() {
//       game.entry(9)
//     }).toThrow("single entries can only be strikes");
//   });
//   it('the game is over after 10 frames', function() {
//     for (var i = 0; i < 10; i++) {
//       game.entry(4, 5);
//     }
//     expect(function() {
//       game.entry(4, 5)
//     }).toThrow("no more entries allowed as game over");
//   });
//   it('only the tenth frame can take three arguments', function() {
//     expect(function() {
//       game.entry(4, 5, 9)
//     }).toThrow("only the tenth frame can take 3 arguments");
//   });
// });
//
// describe('#sum', function() {
//   it('shows the current total score and puts into an array', function() {
//     for (var i = 0; i < 3; i++) {
//       game.entry(4, 5);
//     }
//     expect(game.currentScore).toEqual([0, 9, 18, 27]);
//   });
// });
// describe('#_spare', function() {
//   it('calculates the points correctly for a spare', function() {
//     game.entry(4, 5);
//     game.entry(5, 5);
//     game.entry(4, 5);
//     expect(game.currentScore).toEqual([0, 9, 23, 32])
//   });
// });
//
// describe('#_strike', function() {
//   it('calculates the points correctly for a strike', function() {
//     game.entry(4, 5);
//     game.entry(10);
//     game.entry(4, 5);
//     expect(game.currentScore).toEqual([0, 9, 28, 37])
//   });
// });

// describe('#extra game combinations', function() {
//   it('calculates the points correctly', function() {
//     game.entry(4, 5);
//     game.entry(10);
//     game.entry(4, 6);
//     game.entry(10);
//     game.entry(4, 4);
// //     expect(game.currentScore).toEqual([0, 9, 29, 67, 75])
// //   });
// // });
// });
// })
