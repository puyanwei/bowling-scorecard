describe('Player', function() {

  beforeEach(function() {
    frame = new Frame();
  });

  describe("#errorCheck", function() {
    it("throws an error if either entry is higher then 10", function() {
      expect(function() {
        frame.errorCheck(11, 2);
      }).toThrow("entry cannot be higher then 10");
      expect(function() {
        frame.errorCheck(5, 12);
      }).toThrow("entry cannot be higher then 10");
    });
    it("throws an error if the sum of entries is higher then 10", function() {
      expect(function() {
        frame.errorCheck(6, 6);
      }).toThrow("the sum of entries cannot be higher then 10");
    });
  });
});
