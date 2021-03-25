const Test = require("../index");


it ("Finds the diff of 2 nums", () => {
    expect(Test.diff(2, 2)).toBe(0);
})

it("Adds 2 nums together", () => {
    expect(Test.add(2, 2)).toBe(4);
}) 
