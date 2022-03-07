// Write your tests here!
const expect = require("chai").expect;
const { polybius } = require("../src/polybius.js");

describe("polybius", () => {
    it("should translate both 'i' and 'j' to 42", () => {
      const actual = polybius("alligator");
      const expected = "111313422211444324";
      expect(actual).to.equal(expected);
    });

    it("should leave spaces as is", () => {
      const actual = polybius("it works");
      const expected = "4244 2543245234";
      expect(actual).to.equal(expected);
    });

    it("should return false if the length of all numbers is odd", () => {
        const actual = polybius("51542451521", encode = false);
        expect(actual).to.be.false;
    });
});