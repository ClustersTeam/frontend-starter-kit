var Add = require("../src/scripts/app");


describe("Add functionality", function() {
    it("should equal 15", function() {
        expect(Add(10, 5)).toEqual(15);
    });
    it("should not equal 0", function() {
        expect(Add(10, 5)).not.toEqual(0);
    });
});
