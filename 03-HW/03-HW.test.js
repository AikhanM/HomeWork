const { getEvenNumbers } = require('./03-HW')

describe('getEvenNumbes function:', () => {
    test('Function should return even numbers', () => {
        expect(getEvenNumbers([1, 2, 3, 4])).toEqual([2,4])
        expect(getEvenNumbers([1, 0, 3, 4])).toEqual([0,4])
        expect(getEvenNumbers([-2, 0, 1, 4])).toEqual([-2,0,4])
  
    })

    test('Function should send an error if value is false', () => {
        expect(() => getEvenNumbers([1, 0, '121', 4])).toThrow()
        expect(() => getEvenNumbers([1, 0, x, 4])).toThrow()
        expect(() => getEvenNumbers([])).toThrow()
        expect(() => getEvenNumbers(['', '', ''])).toThrow()
    })
})