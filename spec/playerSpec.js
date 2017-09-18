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

  describe("#wasSpare", function() {
    it("adds the extra points to the total score if the previous bowl has a spare", function() {
      player.entry(5, 5);
      player.entry(4, 3);
      player.entry(0, 10);
      player.entry(2, 5);

      console.log(player.framesArray);
      console.log(player.score);
      expect(player.outputScore()).toEqual([
        [5, 5, 14],
        [4, 3, 21],
        [0, 10, 33],
        [2, 5, 40]
      ]);
    });
  });
});
//   describe("#outputScore", function() {
//     it("outputs all bowls and the running score", function() {
//       player.entry(3, 5);
//       player.entry(4, 5);
//       expect(player.outputScore()).toEqual([[3, 5, 8], [4, 5, 17]]);
//     });
//   });
// });

// steps to calculating score;
// 1. is prev bowl strike/spare?
// 2. if no, add bowls to prev frame total
// 1.1. if yes, add bowl/bowls to prev score and to itself
// 3. save scores ie overwrite current
