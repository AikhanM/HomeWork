const  { validateEmail } = require('./04-HW')

describe('validateEmail function:', () => {
    test('It should return true if it is an email', () => {
        expect(validateEmail('aikhanmirzaevi@gmail.com')).toEqual(true);
        expect(validateEmail('aikhanmirzaevi@mail.ru')).toEqual(true);
        expect(validateEmail('aikhanmirzaevi@outlook.com')).toEqual(true);
        expect(validateEmail('aikhanmirzaevi@example.com')).toEqual(true);
    });

    test('It should return false if it is not an email', () => {
        expect(validateEmail('aikhanmirzaevi@mail')).toEqual(false);
        expect(validateEmail('aikhanmirzaevi')).toEqual(false);
        expect(() =>validateEmail(1234)).toThrow()
        expect(() =>validateEmail('')).toThrow()
    });
});
