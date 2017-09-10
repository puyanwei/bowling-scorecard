describe('FrameTen', function() {
  describe('#initialize', function() {
    it('saves the score of the first, second and third bowls', function() {
      frameTen = new FrameTen(3, 7, 8)
      expect(frameTen.first).toEqual(3)
      expect(frameTen.second).toEqual(7)
      expect(frameTen.third).toEqual(8)
    });
    it('frame total is the sum of first, second and third bowls', function() {
      frameTen = new FrameTen(2, 8, 6)
      expect(frameTen.frameTotal).toEqual(16)
    });
  });

  describe('entry', function() {
    it('throws an error if any entry is more then 10', function() {
      expect(function() {
        frameTen = new FrameTen(11, 0, 2)
      }).toThrow("any entry cannot be bigger then 10")
      expect(function() {
        frameTen = new FrameTen(1, 11, 2)
      }).toThrow("any entry cannot be bigger then 10")
      expect(function() {
        frameTen = new FrameTen(1, 0, 11)
      }).toThrow("any entry cannot be bigger then 10")
    });
    it('throws an error if the sum of first and second is more then 10', function() {
      expect(function() {
        frameTen = new FrameTen(5, 6, 9)
      }).toThrow("the sum of the first and second entries cannot be bigger then 10")
    });
    it('throws an error if a third entry is attempted when the sum of the first and second are not 10', function() {
      expect(function() {
        frameTen = new FrameTen(5, 4, 9)
      }).toThrow("third entry only allowed if spare or strike bowled")
    });
    it('throws an error if first bowl is a strike, and second is not and a third entry is attempted', function () {
      expect(function() {
        frameTen = new FrameTen(10, 4, 9)
      }).toThrow("third entry only allowed if second bowl makes a spare or strike")
    });
    it('accepts a two bowl entry', function() {
      frameTen = new FrameTen(2, 6)
      expect(frameTen.frameTotal).toEqual(8)
    });
  });
});
