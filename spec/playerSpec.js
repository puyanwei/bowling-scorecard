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
      expect(player.allScores).toContain(jasmine.any(Object))
    });
    it('throws and error if there are more then 9 entries this game', function() {
      expect(function() {
        for (var i = 0; i < 10; i++) {
          player.entry(2, 2)
        }
      }).toThrow("no more two bowl entries left in game")
    })
  });

  describe('#frameDeclare', function() {
    it('current frame is declared', function() {
      player.entry(3, 6)
      player.entry(3, 6)
      player.entry(3, 6)
      expect(player.prevFrame).toEqual(jasmine.any(Object))
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

  describe('#isSpare', function() {
    it('adds the first bowl from this frame to the previous and current frame', function() {
      player.entry(4, 6)
      player.entry(4, 3)
      expect(player.runningScore).toEqual(21)
    });
  });

  describe('#isStrike', function() {
    it('adds two bowls from this frame to the previous and current frame', function() {
      player.entry(10, 0)
      player.entry(4, 3)
      player.entry(10, 0)
      player.entry(3, 4)
      player.entry(5, 5)
      player.entry(3, 4)
      expect(player.runningScore).toEqual(68)
    });
  });

  describe('#TenthFrame', function() {
    it('creates a tenth frame which accepts three bowls', function() {
      for (var i = 0; i < 9; i++) {
        player.entry(2, 2)
      }
      player.tenthFrame(2, 4, 9)
      expect(player.allScores.length).toEqual(10)
    });
  });
});
