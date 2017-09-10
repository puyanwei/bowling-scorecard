describe('FrameTen', function() {
  describe('#initialize', function() {
    it('saves the score of the first, second and third bowls', function() {
      frameTen = new FrameTen(3, 4, 8)
      expect(frameTen.first).toEqual(3)
      expect(frameTen.second).toEqual(4)
      expect(frameTen.third).toEqual(8)
    });
    it('frame total is the sum of first, second and third bowls', function() {
      frameTen = new FrameTen(2, 4, 6)
      expect(frameTen.frameTotal).toEqual(12)
    });
  });

  describe('entry', function() {
    it('throws an error if any entry is more then 10', function() {
      frameTen = new FrameTen(11, 0, 2)
      expect(function() {
        frameTen.entry(11, 0, 2)
      }).toThrow("any entry cannot be bigger then 10")
      expect(function() {
        frameTen.entry(1, 11, 2)
      }).toThrow("any entry cannot be bigger then 10")
      expect(function() {
        frameTen.entry(1, 0, 11)
      }).toThrow("any entry cannot be bigger then 10")
    });
    it('throws an error if the sum of first and second is more then 10', function() {
      expect(function() {
        frameTen.entry(5, 6, 9)
      }).toThrow("the sum of the first and second entries cannot be bigger then 10")
    });
  });
});
