const { sum } = require('./01-HW')
const { subtract } = require('./01-HW')
const { multiply } = require('./01-HW')
const { divide } = require('./01-HW')

describe('Sum function:', () => {
    test('Sum should return correct addition', () => {
        expect(sum(1,2)).toBe(3)
        expect(sum(3,-2)).toBe(1)
        expect(sum(3,0)).toBe(3)
      
    })    

    test('Function should send an error if values are false', () => {
        expect(() => sum('5', 5)).toThrow('')
        expect(() => sum(5, '5')).toThrow('')
    })
})

describe('Subtract function:', () => {
    test('Subtract should return correct addition', () => {
        expect(subtract(-4,-6)).toBe(2);
        expect(subtract(5,2)).toBe(3);
        expect(subtract(0,3)).toBe(-3);
        
    })
    test('Function should send an error if values are incorrect', () => {
        expect(() => sum('5', 5)).toThrow('')
        expect(() => sum(5, '5')).toThrow('')
    })
})

describe('Multiply function:', () => {
    test('Multiply should return correct addition', () => {
        expect(multiply(2,3)).toBe(6)
        expect(multiply(-2,5)).toBe(-10)
        expect(multiply(0,3)).toBe(0)
       
    })

    test('Function should send an error if values are false', () => {
        expect(() => sum('5', 5)).toThrow('')
        expect(() => sum(5, '5')).toThrow('')
    })
})

describe('Divide function:', () => {
    test('Divide should return correct addition', () => {
        expect(divide(10,2)).toBe(5)
        expect(divide(9,3)).toBe(3)
        expect(divide(0,5)).toBe(0)
       
    })

    test('Function should send an error if values are false', () => {
        expect(() => sum('5', 5)).toThrow('')
        expect(() => sum(5, '5')).toThrow('')
        expect(() => divide(10, 0)).toThrow("");  
    })
})

