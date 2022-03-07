// Write your tests here!
const expect = require("chai").expect;
const { substitution} = require("../src/substitution.js");

describe("substitution", () => {
    // describe false outputs based on incorrect inputs
    it("should return false if the substitution alphabet is missing", () => {
        const actual = substitution("message");
        expect(actual).to.be.false;
    });
  
    it("should return false if the substitution alphabet does not equal exactly 26 characters", ()  => {
       const actual = substitution("message", "thisisshort");
       expect(actual).to.be.false;
       });

    // make sure spacing doesn't matter and capitalization is ignored
    it("should ignore capital letters and leaves spaces as is", () => {                 
        let actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
        let expected = 'elp xhm xf mbymwwmfj dne'
        expect(actual).to.eql(expected)
    });
});