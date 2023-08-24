const { calculateTriangleArea } = require('./07-HW')

describe('calculateTriangleArea', () => {
    test("should throw an error if any of the sides is less than or equal to 0", () => {
        expect(() => calculateTriangleArea(0, 1, 2)).toThrow();
        expect(() => calculateTriangleArea(1, 0, 2)).toThrow();
        expect(() => calculateTriangleArea(1, 2, 0)).toThrow();
        expect(() => calculateTriangleArea(-1, 1, 2)).toThrow();
        expect(() => calculateTriangleArea(1, -1, 2)).toThrow();
        expect(() => calculateTriangleArea(1, 2, -1)).toThrow();
    });
    test("should throw an error if the sum of any two sides is less than or equal to the third side", () => {
        expect(() => calculateTriangleArea(1, 1, 3)).toThrow();
        expect(() => calculateTriangleArea(1, 3, 1)).toThrow();
        expect(() => calculateTriangleArea(3, 1, 1)).toThrow();
    });

    test("should throw an error if any of the sides is not a number", () => {
        expect(() => calculateTriangleArea("1", 1, 2)).toThrow();
        expect(() => calculateTriangleArea(1, "1", 2)).toThrow();
        expect(() => calculateTriangleArea(1, 2, "1")).toThrow();
    });

    test("should throw an error if any of the sides is an empty string", () => {
        expect(() => calculateTriangleArea("", 1, 2)).toThrow();
        expect(() => calculateTriangleArea(1, "", 2)).toThrow();
        expect(() => calculateTriangleArea(1, 2, "")).toThrow();
    });
   
    test("should return the correct area of a triangle", () => {
        expect(calculateTriangleArea(3, 4, 5)).toBe(6);
        expect(calculateTriangleArea(5, 12, 13)).toBe(30);
    });
});