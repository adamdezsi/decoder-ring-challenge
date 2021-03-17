const expect = require("chai").expect;
const substitution = require("../src/substitution.js");



describe("substitution selftest", () => {
    it("should return false when input alphabet isn't 26 characters", () => {
      actual = substitution("message", "plmokn");
      expect(actual).to.eql(false); // No error
    });
  
    it("should correctly encode with the alphabet provided", () => {
      actual = substitution("message", "plmoknijbuhvygctfxrdzeswaq");
      expect(actual).to.eql("ykrrpik"); // No error
    });
  
    it("should return false when input alphabet has multiple values", () => {
      actual = substitution("message", "plmokniiiiiiygctfxrdzeswaq");
      expect(actual).to.eql(false); // No error
    });
  
    it("should maintain spaces both encoding and decoding", () => {
      actual1 = substitution("mess age", "plmoknijbuhvygctfxrdzeswaq");
      actual2 = substitution("ykrr pik", "plmoknijbuhvygctfxrdzeswaq", false)
      expect(actual1).to.eql("ykrr pik"); // No error
      expect(actual2).to.eql("mess age"); // No error
    });

    it("should ignore capital letters", () => {
        actual = substitution("message", "plmoknijbuhvygctfxrdzeswaq");
        expect(actual).to.eql("ykrrpik"); // No error
    });
});
  