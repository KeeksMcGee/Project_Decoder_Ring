// Write your tests here!
const { substitution } = require("../src/substitution");
const expect = require("chai").expect;

describe("subsitution()", () => {
const alpha = "xoyqmcgrukswaflnthdjpzibev";

it("should encode correctly", () => {
    const actual = substitution("hello", alpha);
    const expected = "rmwwl";
    expect(actual).to.equal(expected);
});

it("should decode correctly", () => {
    const actual = substitution("rmwwl", alpha, false);
    const expected = "hello";
    expect(actual).to.equal(expected);
});

it("should maintain spaces throughout", () => {
    const actual = substitution("hello world", alpha);
    const expected = "rmwwl ilhwq";
    expect(actual).to.equal(expected);
});

it("should ignore capital letters", () => {
    const actual = substitution("HeLLo", alpha);
    const expected = "rmwwl";
    expect(actual).to.equal(expected);
});

it("should be able to use symbols within the alphabet", () => {
    const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
    const expected = "y&ii$r&";
    expect(actual).to.equal(expected);
});

it("should return false if alphabet does not have 26 characters", () => {
    const actual = substitution("hello", "short");
    expect(actual).to.equal(false);
});

it("should return false if alphabet contains non-unique characters", () => {
    const actual = substitution("hello", "abcabcabcabcabcabcabcabcyz");
    expect(actual).to.equal(false);
});
});

