// Sum of Digits / Digital Root

// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit,
//  continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.


const digital_root = (n) => {
    while (true) {
        if (n <= 9) {
            return n
        } else {
            n = ("" + n).split("").map(i => parseInt(i)).reduce((acc, b) => acc + b)
        }
    }
}


// TESTS
console.log(digital_root(16)) // 7
console.log(digital_root(456)) // 6