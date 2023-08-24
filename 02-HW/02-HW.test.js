const { reverseString } = require('./02-HW')

describe('ReverseString function:', () => {
    test('Function should reverse the string', () => {
        expect(reverseString('Hello')).toBe('olleH')
        expect(reverseString('Vacation is cool!')).toBe('!looc si noitacaV')
        
    })

    test('Function should send an error if value is false', () => {
        expect(() => reverseString('')).toThrow()
        expect(() => reverseString(5050)).toThrow()
        expect(() => reverseString()).toThrow()
    })
})