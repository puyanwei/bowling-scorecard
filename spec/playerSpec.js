describe('Game', function() {
    var player;
    var frame;

  beforeEach(function() {
    player = new Player();
    frame = new Frame();
  })


  describe('#initialize', function() {
    it('running score starts at zero', function() {
      expect(player.runningScore).toEqual(0);
    });
    it('all scores starts as an empty array', function () {
      expect(player.allScores).toEqual([])
    });
  });

  describe('#entry', function () {
    it('entry creates a new frame and adds it to the game', function () {
      player.entry(3,4);
      console.log(player.allScores);
      expect(player.allScores.length).toEqual(1);
    });
  });

  describe('#prevCalcs', function() {
    // it('shows the previous first bowl points', function() {
    //   player.entry(4, 6)
    //   player.entry(5, 2)
    //   expect(player.prevFirstBowl).toEqual(4)
    // });
    // it('shows the previous two bowls points', function() {
    //   player.entry(4, 6)
    //   player.entry(5, 2)
    //   expect(player.prevTwoBowls).toEqual(10)
    // });
  });
});
