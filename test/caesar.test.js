// Write your tests here!
const expect = require("chai").expect;
const { caesar } = require("../src/caesar.js");

describe("caesar", () => {
    it("should return false with a shift set to 0", () => {
        const actual = caesar("Eureka", 0);
        expect(actual).to.be.false;
    });

    it("should return false if shift is less than -25", () => {
        const actual = caesar("Eureka", -26);
        expect(actual).to.be.false;
    });

    it("should return false if shift is greater that 25", () => {
        const actual = caesar("Eureka", 26);
        expect(actual).to.be.false;
    });
  
    it("should return false if shift is not inputted", () => {
        const actual = caesar("Eureka");
        expect(actual).to.be.false;
    });
  
  // individual tests for other parameters
    it("should wrap around to the front of the alphabet", () => {
        const expected = "abc";
        const actual = caesar("xyz", 3);
        expect(actual).to.eql(expected);
    });

    it("should wrap around to the back of the alphabet", () => {
        const expected = "xyz";
        const actual = caesar("abc", -3);
        expect(actual).to.eql(expected);
    });

    it("should convert all characters to lower case, ignore spaces, and ignore special characters", () => {
        const input = "Ukhuaq Y Wej Yj";
        const expected = "eureka i got it";
        const actual = caesar(input.toLowerCase(), -10, false);
        expect(actual).to.eql(expected);
    });
});