import { calculator } from "./index";

describe('calculator', () => {
    test('=> calculator test', () => {
        expect(calculator('a', 12, 'add')).toBe('Error! input must be numeric');
    });

    test('=> calculator test', () => {
        expect(calculator(12, 'c', 'add')).toBe('Error! input must be numeric');
    });

    test('=> calculator test', () => {
        expect(calculator('12', '3', 'subtract')).toBe(9);
    });

    test('=> calculator test', () => {
        expect(calculator(43, 12, 'multiply')).toBe(516);
    });

    test('=> calculator test', () => {
        expect(calculator(3, 4, 'divide')).toBe(0.75);
    });

    test('=> calculator test', () => {
        expect(calculator(12, 4, 'divide')).toBe(3);
    });

    test('=> calculator test', () => {
        expect(calculator(3, 0, 'divide')).toBe('Error! division by zero not allowed');
    });

    test('=> calculator test', () => {
        expect(calculator(131, 2133, 'lorem ipsum')).toBe('Invalid operation!');
    });
});