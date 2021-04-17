// Square(n) Sum

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.



function squareSum(numbers: number[]): number {
    return numbers.length > 0 ? numbers.reduce((a: number, b: number) => a + b * b, 0) : 0
}


Tests:
console.log(squareSum([1,2])) // 5);
console.log(squareSum([0, 3, 4, 5])) // 50);