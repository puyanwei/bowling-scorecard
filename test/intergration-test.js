const Browser = require("zombie");
var chai = require("chai"),
  expect = chai.expect,
  should = chai.should();

var should = require("chai").should();
var url = "http://localhost:8080/";

describe("User visits page", function() {
  const browser = new Browser();

  before(function() {
    return browser.visit(url);
  });

  describe("zombie js loads properly", function() {
    it("title of page should be Bowling Scorecard", function() {
      browser.text("Title").should.equal("Bowling Scorecard");
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

  describe("button outcomes", function() {
    it("clicking a button shows it on the scorecard", function(done) {
      browser.assert.input("form input[name=text]", "Head Eater");
      // browser.pressButton("1", done);
      // browser.text("#first").should.equal("1");
      done();
    });
  });
});
