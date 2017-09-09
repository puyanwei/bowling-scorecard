describe('Game', function() {
  var frame;

  beforeEach(function() {
    game = new Game();
  })

  describe('#initialize', function() {
    it('starts with an empty player array', function() {
      expect(game.players).toEqual([]);
    });
  });

  describe('#addPlayer', function () {
    it('adds a player to the game ', function () {
      game.addPlayer("Mike")
      expect(game.players).toEqual(["Mike"])
    });
  });
})
