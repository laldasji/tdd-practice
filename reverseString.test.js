import { reverseString } from "./index";

describe('reverseString', () => {
    test('=> Reverse String 1', () => {
        expect(reverseString('abhinav ashutosh')).toBe('hsotuhsa vanihba');
    });

    test('=> Reverse String 1', () => {
        expect(reverseString('lorem')).toBe('merol');
    });

    test('=> Reverse String 1', () => {
        expect(reverseString('WOAH!!!')).toBe('!!!HAOW');
    });
});