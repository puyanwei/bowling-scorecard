const Browser = require("zombie");

url = "http://localhost:8080/";

describe("User visits page", function() {
  const browser = new Browser();

  before(function() {
    return browser.visit(url);
  });

  describe("zombie js works", function() {
    it("title of page should be Bowling Scorecard", function() {
      browser.assert.text("title", "Bowling Scorecard");
    });
  });

  describe("elements exist on page", function() {
    it("there is are containers on the page", function(done) {
      browser.assert.element(".scorecard");
      browser.assert.element(".frame-title-container");
      browser.assert.element(".score-container");
      done();
    });
  });
});
