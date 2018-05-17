describe("#Bowl", function() {
  beforeEach(function() {
    bowl = new Bowl(5);
  });

  describe("#initialize", function() {
    it("returns the value of the bowl, which is 5", function() {
      expect(bowl.value).toEqual(5);
    });
  });
});
