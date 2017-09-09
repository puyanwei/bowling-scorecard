fdescribe('Frame', function() {
  var frame;

  // describe('#initialize', function() {
  //   it('shows the bowls per frame', function() {
  //     frame = new Frame(4, 3);
  //     expect(frame.bowlsPerFrame).toEqual([4, 3])
  //   });
  //   it('shows score for this frame', function() {
  //     frame = new Frame(4, 3);
  //     expect(frame.frameTotal).toEqual(7)
  //   });
  // });
  describe('#firstBowl', function() {
    it('adds the score of the first bowl', function() {
      frame = new Frame();
      frame.firstBowl(3);
      expect(frame.first).toEqual(3)
    });
    it('tags a strike if first bowl is 10', function() {
      frame = new Frame();
      frame.firstBowl(10);
      expect(frame.strike).toBe(true);
    })
    it('throws and error if entry is more then 10', function() {
      frame = new Frame();
      expect(function() {
        frame.firstBowl(11)
      }).toThrow("entry cannot be bigger then 10")
    })
  });
});
  // describe('#isStrike', function() {
  //   it('inputs a strike to the frame', function() {
  //     frame = new Frame(10, 0)
  //     expect(frame.strike).toBe(true);
  //   });
  // });
  // describe('#isSpare', function() {
  //   it('inputs a spare to the frame', function() {
  //     frame = new Frame(4, 6)
  //     expect(frame.spare).toBe(true);
  //   });
  // });
