describe('Game', function() {
  var player;
  var frame;

  beforeEach(function() {
    player = new Player();
  })

  describe('#initialize', function() {
    it('running score starts at zero', function() {
      expect(player.runningScore).toEqual(0);
    });
    it('all scores starts as an empty array', function() {
      expect(player.allScores).toEqual([])
    });
    it('frames get counted after an entry has been made', function() {
      player.entry(3, 6);
      expect(player.framesPlayed).toEqual(1);
    });
  });

  describe('#entry', function() {
    it('entry creates a new frame and adds it to the game', function() {
      player.entry(3, 4);
      expect(player.allScores.length).toEqual(1);
    });
  });

  describe('#prevCalcs', function() {
    it('shows the previous first bowl points', function() {
      player.entry(4, 6)
      player.entry(5, 2)
      expect(player.prevFirstBowl).toEqual(4);

    });
    it('shows the previous two bowls points', function() {
      player.entry(4, 3)
      player.entry(5, 2)
      expect(player.prevTwoBowls).toEqual(7)
    });
  });

  describe('#displayScore', function() {
    it('displays the correct score', function() {
      player.entry(3, 6)
      player.entry(2, 6)
      expect(player.displayScore()).toEqual([
        [3, 6, 9],
        [2, 6, 17]
      ])
    });
  });

  // describe('#isSpare', function () {
  //   it('adds the first bowl from this frame to the previous', function () {
  //     player.entry(4, 6)
  //     player.entry(4, 3)
  //     expect(player.runningScore).toEqual(21)
  //   });
  // });
});
