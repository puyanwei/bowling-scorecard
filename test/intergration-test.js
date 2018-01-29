const Browser = require("zombie");

// We're going to make requests to http://example.com/signup
// Which will be routed to our test server localhost:3000
Browser.localhost("example.com", 3000);

describe("User visits the page", function() {
  const browser = new Browser();

  before(function() {
    return browser.visit("/");
  });

  it("should see welcome page", function() {
    browser.assert.text("title", "Welcome To Brains Depot");
  });
});
