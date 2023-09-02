const { getDaysDifference } = require('./05-HW');
describe('getDaysDifference function', () => {
    test('Function must return day difference between two dates', () => {
        expect(getDaysDifference('2023-08-01', '2023-08-10')).toEqual(9);
        expect(getDaysDifference('2023-08-15', '2023-08-20')).toEqual(5);
    });

    test('Function should send an error if date is not correct', () => {
        expect(() => getDaysDifference('2004-02-30', '2005-05-22')).toThrow();
        expect(() => getDaysDifference('2004-04-31', '2005-03-08')).toThrow();
        expect(() => getDaysDifference('2004-03-32', '2007-06-12')).toThrow();
        expect(() => getDaysDifference('2004-02-30', '2005-03-08')).toThrow();
    });
});
