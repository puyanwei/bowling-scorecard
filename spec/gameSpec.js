describe('Game', function() {
  var game;
  var frame;

  beforeEach(function() {
    game = new Game();
    frame = new Frame();
  })

  describe('#initialize', function() {
    it('creates a new frame', function() {
      expect(frame).toEqual(jasmine.any(Object));
    })
  })
});
