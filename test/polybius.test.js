const expect = require("chai").expect;
const polybius = require("../src/polybius.js");



describe("Polybius selftest", () => {
    it("should encode both i and j as 42", () => {
      actual = polybius("aij", 2);
      expect(actual).to.eql("114242"); // No error
    });
  
    it("should decode 42 as both I and J", () => {
      actual = polybius("1142", false);
      expect(actual).to.eql("a(i / j)"); // No error
    });
  
    it("should ignore capital letters", () => {
      actual = polybius("ADam");
      expect(actual).to.eql("11411123"); // No error
    });
  
    it("should maintain spaces both encoding and decoding", () => {
      actual1 = polybius("Ad am");
      actual2 = polybius("1141 1123", false)
      expect(actual1).to.eql("1141 1123"); // No error
      expect(actual2).to.eql("ad am"); // No error

    });
});
  