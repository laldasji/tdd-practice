import { capitalise } from './index';

describe('capitalise', () => {
    test('=> Capitalise 1', () => {
        expect(capitalise('abhinav ashutosh')).toBe('Abhinav ashutosh');
    });

    test('=> Capitalise 2', () => {
        expect(capitalise('The quick brown fox')).toBe('The quick brown fox');
    });

    test('=> Capitalise 3', () => {
        expect(capitalise('HEY, YOU! YOU\'RE FINALLY AWAKE!')).toBe('HEY, YOU! YOU\'RE FINALLY AWAKE!');
    });
});