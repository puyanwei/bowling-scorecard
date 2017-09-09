describe('Game', function() {
    var player;
    var frame;

  beforeEach(function() {
    player = new Player();
    frame = new Frame();
  })


  describe('#initialize', function() {
    it('starts with an empty match array', function() {
      expect(player.match).toEqual([]);
    });
    it('shows the number of frames played', function() {
      player.entry(4, 5);
      player.entry(4, 5);
      expect(player.framesPlayed).toEqual(2);
    });
    it('running score starts at zero', function() {
      expect(player.runningScore).toEqual(0);
    });
    it('shows the running total score', function() {
      player.entry(3, 5);
      player.entry(3, 5);
      expect(player.runningScore).toEqual(16)
    });
  });

  describe('#entry', function() {
    it('adds a frame to the match array', function() {
      player.entry(4, 5);
      player.entry(4, 5);
      expect(player.framesPlayed).toEqual(2);
    });
    it('inputs a strike to the frame', function() {
      player.entry(4, 5);
      player.entry(10);
      expect(player.match[1].strike).toBe(true);
    });
    it('throws an error if sum of entries are more then 10', function() {
      expect(function() {
        player.entry(5, 6)
      }).toThrow("Entries cannot be a sum of over 10")
    });
  });

  describe('#prevCalcs', function() {
    it('shows the previous first bowl points', function() {
      player.entry(4, 6)
      player.entry(5, 2)
      expect(player.prevFirstBowl).toEqual(4)
    });
    it('shows the previous two bowls points', function() {
      player.entry(4, 6)
      player.entry(5, 2)
      expect(player.prevTwoBowls).toEqual(10)
    });
  });
  // describe('#tally', function () {
  //   it('outputs the correct score after a spare', function () {
  //     player.entry(4, 6)
  //     player.entry(3, 6)
  //     expect(player.runningScore).toEqual(22)
  //   });
  // });
});
