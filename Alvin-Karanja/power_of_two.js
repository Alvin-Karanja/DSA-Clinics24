function isPowerOfTwo(num) {
    if (num <= 0) {
        return false;
    }
    while (num > 1) {
        if (num % 2 !== 0) {
            return false;
        }
        num /= 2;
    }
    return true;
}

// Test cases
const testCases = [
    [8, true],
    [6, false],
    [16, true],
    [32, true],
    [9, false],
    [0, false],
    [1, true],
    [-1, false]
];

for (const [num, expectedResult] of testCases) {
    const result = isPowerOfTwo(num);
    if (result === expectedResult) {
        console.log(`Test case passed: ${num} is a power of two: ${result}`);
    } else {
        console.log(`Test case failed: ${num} is a power of two: ${result} (expected: ${expectedResult})`);
    }
}