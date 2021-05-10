// Write your tests here!
// Write your tests here!
const { polybius } = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius()", () => {

  it("should encode correctly", () => {
    const actual = polybius("hello");
    const expected = "3251131343";
    expect(actual).to.equal(expected);
  });

  it("should decode correctly", () => {
    const actual = polybius("3251131343", false);
    const expected = "hello";
    expect(actual).to.equal(expected);
  });

  it("should return false if number of characters (non-space) is odd", () => {
    const actual = polybius("123", false);
    const expected = false;
    expect(actual).to.equal(expected);
  });

  it("should ignore non-alphabetic characters", () => {
      const actual = polybius("hello?!?");
      const expected = "3251131343";
    expect(actual).to.equal(expected);
  });

  it("should maintain spaces", () => {
      const actual = polybius("hello world");
      const expected = "3251131343 2543241341";
    expect(actual).to.equal(expected);
  });

  it("should ignore capital letters", () => {
      const actual = polybius("sEcReT");
      const expected = "345131245144";
    expect(actual).to.equal(expected);
  });

  it("should convert i or j to 42", () => {
    const actual = polybius("Kiarra Gibbs");
    const expected = "524211242411 2242212134";
    expect(actual).to.equal(expected);
  });

  it("should convert 42 to (i/j)", () => {
    const actual = polybius("524211242411 2242212134", false);
    const expected = "k(i/j)arra g(i/j)bbs"
    expect(actual).to.equal(expected);
  });
});
