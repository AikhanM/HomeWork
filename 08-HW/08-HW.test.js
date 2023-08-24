const { default: expect } = require('expect')
const { convertCurrency }= require('./08-HW')

describe('converCurrency function', () => {
        test('function should return correct currency', () => {
            expect(convertCurrency(100,1.7)).toBe(170)
            expect(convertCurrency(50,1.2)).toBe(60)      
        })

        test('function should send error if value is false', () => {
            expect(() => expect(convertCurrency('50',1.2)).toThrow())
            expect(() => expect(convertCurrency(50,'1.2')).toThrow())
            expect(() => expect(convertCurrency(50,'')).toThrow())
            expect(() => expect(convertCurrency('',1.2)).toThrow())
            expect(() => expect(convertCurrency(50,0)).toThrow())
            expect(() => expect(convertCurrency(0,50)).toThrow())
            expect(() => expect(convertCurrency(1,-50)).toThrow())
            expect(() => expect(convertCurrency(-1,50)).toThrow())
            expect(() => expect(convertCurrency()).toThrow())
        })
        
        
}) 