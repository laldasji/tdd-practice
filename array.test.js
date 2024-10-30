import { analyzeArray } from "./index";

describe('Analyze Array', () => {
    test('returns all values', () => {
        expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
            average: 4,
            min: 1,
            max: 8,
            length: 6,
        });
    });

    test('throws error for invalid inputs', () => {
        expect(() => analyzeArray([])).toThrow();
        expect(() => analyzeArray(null)).toThrow();
        expect(() => analyzeArray([1, 2, 'yam'])).toThrow();
        expect(() => analyzeArray([null, undefined, 'taco'])).toThrow();
    });
});