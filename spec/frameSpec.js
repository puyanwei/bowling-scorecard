describe('Frame', function() {
  var frame;
  //
  // beforeEach(function() {
  //   frame = new Frame()
  // })

  describe('#firstBowl', function() {
    it('saves the score of the first bowl', function() {
      frame = new Frame(3, 4)
      expect(frame.first).toEqual(3)
    });
    it('tags a strike if first bowl is 10', function() {
      frame.firstBowl(10);
      expect(frame.strike).toBe(true);
    })
    it('throws and error if entry is more then 10', function() {
      expect(function() {
        frame.firstBowl(11)
      }).toThrow("entry cannot be bigger then 10")
    })
  });

  describe('#secondBowl', function() {
    it('saves the score of the second bowl', function() {
      frame.firstBowl(1);
      frame.secondBowl(3);
      expect(frame.second).toEqual(3)
    });
    it('tags a spare if second bowl is 10', function() {
      frame.firstBowl(0);
      frame.secondBowl(10);
      expect(frame.spare).toBe(true);
    })
    it('tags a spare if the sum of the first and second bowl is 10', function() {
      frame.firstBowl(3);
      frame.secondBowl(7);
      expect(frame.spare).toBe(true);
    })
    it('throws and error if entry is more then 10', function() {
      expect(function() {
        frame.firstBowl(1)
        frame.secondBowl(11)
      }).toThrow("entry cannot be bigger then 10")
    })
    it('throws and error if the sum of the first and second bowl is more then 10', function() {
      expect(function() {
        frame.firstBowl(6)
        frame.secondBowl(5)
      }).toThrow("entries cannot be a sum of more then 10")
    })
  })
})
