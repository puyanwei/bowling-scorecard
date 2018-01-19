describe("Player", function() {
  // beforeEach(function() {
  //   frame = new Frame();
  // });

  describe("#errorCheck", function() {
    it("throws an error if either entry is higher then 10", function() {
      expect(function() {
        frame = new Frame(11, 2);
      }).toThrow("entry cannot be higher then 10");
      expect(function() {
        frame = new Frame(5, 12);
      }).toThrow("entry cannot be higher then 10");
    });
    it("throws an error if the sum of entries is higher then 10", function() {
      expect(function() {
        frame = new Frame(6, 6);
      }).toThrow("the sum of entries cannot be higher then 10");
    });
  });

  describe("#isStrike", function() {
    it("sets strike to be true", function() {
      frame = new Frame(10, 0);
      expect(frame.isStrike()).toBe(true);
    });
  });

  describe("#isSpare", function() {
    it("sets spare to be true", function() {
      frame = new Frame(5, 5);
      expect(frame.isSpare()).toBe(true);
    });
    it("sets spare to be true", function() {
      frame = new Frame(0, 10);
      expect(frame.isSpare()).toBe(true);
    });
  });
});
