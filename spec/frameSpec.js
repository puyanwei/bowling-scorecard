describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  })

  describe('#initialize', function() {
    it('has 10 pins standing up by default', function() {
      expect(frame.pins).toEqual(10);
    })
  });

  describe('#bowl', function() {
    it('knocks down pins', function() {
      frame.bowl(4);
      expect(frame.pins).toEqual(6);
    });
    it('cannot knock down more then 10 pins', function() {
      expect(function() {
        frame.bowl(13)
      }).toThrow("Cannot choose more then 10");
    })
  });

  describe('#reset', function() {
    it('resets the pins back to 10 after a bowl', function() {
      frame.bowl(3);
      frame.reset();
      expect(frame.pins).toEqual(10);
    });
  });
});
