const Browser = require("zombie");

// We're going to make requests to http://example.com/signup
// Which will be routed to our test server localhost:3000

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
});
