export function capitalise(input) {
    return input[0].toUpperCase() + input.slice(1);
}

export function reverseString(input) {
    let answer = '';
    for (let i = input.length - 1; i >= 0; i--) {
        answer += input[i];
    }
    return answer;
}

export function calculator(a, b, operation) {
    a = Number(a);
    b = Number(b);
    if (isNaN(a) || isNaN(b)) {
        return 'Error! input must be numeric';
    }
    if (operation === 'add') {
        return a + b;
    }
    if (operation === 'subtract') {
        return a - b;
    }
    if (operation === 'multiply') {
        return a * b;
    }
    if (operation === 'divide') {
        if (b != 0)
            return a / b;
        else
            return 'Error! division by zero not allowed';
    }
    return 'Invalid operation!';
}

export function caesarCipher(input, shiftValue) {
    let result = '';
    for (let i = 0; i < input.length; i++) {
        let char = input[i];
        let asciiValue = input.charCodeAt(i);
        let newAsciiValue;

        if (char >= 'A' && char <= 'Z') {
            newAsciiValue = ((asciiValue - 65 + shiftValue) % 26 + 26) % 26 + 65;
        } else if (char >= 'a' && char <= 'z') {
            newAsciiValue = ((asciiValue - 97 + shiftValue) % 26 + 26) % 26 + 97;
        } else {
            result += input[i];
            continue;
        }

        result += String.fromCharCode(newAsciiValue);
    }
    return result;
}

export function analyzeArray(array) {
	if (!array || array.length < 1 || !array.every((value) => typeof value === 'number'))
		throw new TypeError('Input must be an array of numbers!')
	
    const average = array.reduce((acc, cur) => acc + cur, 0) / array.length;
    
	const sorted = array.sort();
	const min = sorted[0];
	const max = sorted[array.length - 1];

	return { average, min, max, length : array.length };
};