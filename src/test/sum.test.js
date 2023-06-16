const sumTwo = require("../sum")

test('sum two number', () => {

    expect(sumTwo(2, 4)).toBe(6)
    expect(sumTwo(5, 4)).toBe(9)
    expect(sumTwo(6, 6)).toBe(12)

})

