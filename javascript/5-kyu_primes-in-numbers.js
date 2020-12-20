// Primes in numbers
// Given a positive number n > 1 find the prime factor decomposition of n...

const primeFactors = n => {
    let nums = {}
    let result = ""
    for (let i = 2; i < n; i++) {
        if (i == 2 || i == 3 || i % 2 != 0 && i % 3 != 0) {
            while (n % i == 0) {
                n = n / i
                !nums[i] ? nums[i] = 1 : nums[i] = nums[i] + 1
            }
        }
    }

    if (n != 1) nums[n] = 1
    
    for (let number of Object.keys(nums)) {
        nums[number] == 1 ? result = result + `(${number})` : result = result + `(${number}**${nums[number]})`
    }
    return result
}


console.log(primeFactors(7775460)) // "(2**2)(3**3)(5)(7)(11**2)(17)"
console.log(primeFactors(86240)) // "(2**5)(5)(7**2)(11)"
console.log(primeFactors(40931)) // '(11)(61**2)'
console.log(primeFactors(529)) // '(23**2)'



// FIRST SOLUTION, TOO SLOW

/* const primeFactors = n => {
    // let primes = [...Array(20).keys()].filter(i => i == 2 || i == 3 || i % 2 != 0 && i % 3 != 0)
    // let primes = [1,  2,  3,  5,  7, 11, 13, 17, 19, 23, 25, 29, 31, 35, 37, 41, 43, 47, 49]
    let primes = [1,  2,  3,  5,  7, 11, 13, 17, 19, 23, 25, 29, 31, 35, 37, 41, 43, 47, 49]
    let nums = {}
    let result = ""
    while (n > 1) {
        for (let i = 1; i < primes.length; i++) {
            if (n % primes[i] == 0) {
                n = n / primes[i]
                !nums[primes[i]] ? nums[primes[i]] = 1 : nums[primes[i]] = nums[primes[i]] + 1
                break;
            }
        }
    }
    for (let number of Object.keys(nums)) {
        nums[number] == 1 ? result = result + `(${number})` : result = result + `(${number}**${nums[number]})`
    }
    return result
} */