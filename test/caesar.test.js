// Write your tests here!
const { caesar } = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar()", () => {
    it("should encode correctly", () => {
        const actual = caesar("hello", 7);
        const expected = "olssv";
        expect(actual).to.equal(expected);
    });

    it("should return false if the shift value is not present", () => {
        const actual = caesar("hello", undefined);
        const expected = false;
        expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
        const actual = caesar("HeLLo", 4);
        const expected = "lipps";
        expect(actual).to.equal(expected);
    });

    it("should handle shifts that go past the end of the alphabet", () => {
        const actual = caesar("z", 2);
        const expected = "b";
        expect(actual).to.equal(expected);
    });

    it("should decode correctly", () => {
        const actual = caesar("olssv", -7);
        const expected = "hello";
        expect(actual).to.equal(expected);
    });

    it("should maintain spaces and other symbols", () => {
        const actual = caesar("Hello world!", 3);
        const expected = "khoor zruog!"
        expect(actual).to.equal(expected);
    })
});


