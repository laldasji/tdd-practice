import { caesarCipher } from "./index";

test('=> Caesar Cipher 1', () => {
    expect(caesarCipher('xyz',3)).toBe('abc');
});

test('=> Caesar Cipher 1', () => {
    expect(caesarCipher('HeLLo',3)).toBe('KhOOr');
});

test('=> Caesar Cipher 1', () => {
    expect(caesarCipher('Hello, World!',3)).toBe('Khoor, Zruog!');
});

test('=> Caesar Cipher 1', () => {
    expect(caesarCipher('',3)).toBe('');
});