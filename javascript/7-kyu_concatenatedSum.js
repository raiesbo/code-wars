// Concatenated Sum

// The number 198 has the property that 198 = 11 + 99 + 88, i.e., if each of its digits is concatenated twice and then summed, the result will be the original number. It turns out that 198 is the only number with this property. However, the property can be generalized so that each digit is concatenated n times and then summed.

// eg:-

// original number =2997 , n=3
// 2997 = 222+999+999+777 and here each digit is concatenated three times.

// original number=-2997 , n=3

// -2997 = -222-999-999-777 and here each digit is concatenated three times.

// Write afunction named check_concatenated_sum that tests if a number has this generalized property.



const checkConcatenatedSum = (num, times) => {
    let multiplier = parseInt('1'.repeat(times))
    let res = 0

    for (let i = 0; i < num.toString().length; i++) {
        if (num >= 0) {
            res += parseInt(num.toString()[i] * multiplier)
        } else {
            i !== 0 ? res -= parseInt(num.toString()[i] * multiplier) : null
        }
    }


    console.log(multiplier, res, num)

    return res === num
}




// tests:

console.log(checkConcatenatedSum(2997, 3)) // true
console.log(checkConcatenatedSum(-2997, 3)) // true