// Palindrome chain length

//Write a function which takes a positive integer and returns the number of special steps needed
// to obtain a palindrome. The special step is: "reverse the digits, and add to the original number".
// If the resulting number is not a palindrome, repeat the procedure with the sum until the resulting number is a palindrome.


const palindromeChainLength = n => {
    let isPalindrome = false
    let ctr = 0
    while (!isPalindrome) {
        const middle = Math.floor(n.toString().length / 2)
        const halfTop = n.toString().split("").splice(0, middle).join("")
        const halfBottomEven = n.toString().split("").splice(middle).reverse().join("")
        const halfBottomOdd = n.toString().split("").splice(middle + 1).reverse().join("")
        if (n < 10 || ("" + n).split("").every((i, id, arr) => i == arr[0])) {
            isPalindrome = true
            break;
        } else if (halfTop == halfBottomEven || halfTop == halfBottomOdd) {
            isPalindrome = true
            break;
        }
        n += parseInt(n.toString().split("").reverse().join(""))
        ctr++
    }
    return ctr
};


console.log(palindromeChainLength(1)) //  0
console.log(palindromeChainLength(88)) // 0    

console.log(palindromeChainLength(87)) // 4
console.log(palindromeChainLength(89)) // 24
console.log(palindromeChainLength(10)) // 1
console.log(palindromeChainLength(9001)) // 2
