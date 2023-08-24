const { isValidDate, getDaysDifference } = require('./05-HW'); // Modülünüzün yolunu düzgün şekilde ayarlayın
const expect = require('expect');

describe('getDaysDifference function', () => {
    test('Function must return day difference between two dates', () => {
        expect(getDaysDifference(new Date(2023, 8, 1), new Date(2023, 8, 10))).toEqual(9);
        expect(getDaysDifference(new Date(2023, 8, 15), new Date(2023, 8, 20))).toEqual(5);
    });

    test('Function should send an error if date is not correct', () => {
        expect(() => getDaysDifference('2004-02-30', '2005-05-22')).toThrow();
        expect(() => getDaysDifference('2004-04-31', '2005-03-08')).toThrow();
        expect(() => getDaysDifference('2004-03-32', '2007-06-12')).toThrow();
        expect(() => getDaysDifference('2004-05-30', '2005-03-')).toThrow();
        expect(() => getDaysDifference('2004-02-30', '2005-03-08')).toThrow();
    });
});
