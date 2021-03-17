// Write your tests here!

const expect = require("chai").expect;
const caesar = require("../src/caesar.js");



describe("Caesar selftest", () => {
  it("should return the message with shifted characters", () => {
    actual = caesar("ABC DEF", 2, true);
    expect(actual).to.eql("cde fgh"); // No error
  });

  it("should return false when input is invalid", () => {
    actual = caesar();
    expect(actual).to.eql(false); // No error
  });

  it("should ignore capital letters", () => {
    actual = caesar("ADAM", 3, true);
    expect(actual).to.eql("dgdp"); // No error
  });

  it("should loop alphabet when reaching end index", () => {
    actual = caesar("vWxY!Z", 3, true);
    expect(actual).to.eql("yzab!c"); // No error
  });

  it("should decode when encode is false", () => {
      actual = caesar("yzab!c", 3, false);
      expect(actual).to.eql("vwxy!z"); // No error
    });

  it("should keep spaces and other symbols intact", () => {
      actual = caesar("abc !?", 3, true);
      expect(actual).to.eql("def !?"); // No error
    });
  });
