const {multiply} = require("./multiply.js");


describe('First test chains', () => { 
    test("test for multiplication 3 * 5 = 15", () => {
        expect(multiply(3,5)).toBe(16);
        // toBe() the same as  ===
    })
 })