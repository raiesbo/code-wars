// Palindrome chain length

var palindromeChainLength = function(n) {
    let num = n
    let middle = Math.floor(parseInt(num.toString().split("").length) / 2)
    let bottom = parseInt(num.toString().split("").slice(0, middle).join(""))
    let top = parseInt(num.toString().split("").slice(middle).join(""))
    let ctr = 0
    for (let i = 0; i < n; i++) {
        console.log("num", num,"middle", middle, "bottom", bottom,"top", top, "control", ctr)
        if (bottom === parseInt(top.toString().split("").reverse().join("")) || n < 10) {
            return ctr;
        }
        ctr++
        num += parseInt(num.toString().split("").reverse().join(""))
        middle = Math.floor(parseInt(num.toString().split("").length) / 2)
        bottom = parseInt(num.toString().split("").slice(0, middle).join(""))
        top = parseInt(num.toString().split("").slice(middle).join(""))
    }
};



console.log(palindromeChainLength(1)) //  0
console.log(palindromeChainLength(88)) // 0    

console.log(palindromeChainLength(87)) // 4
console.log(palindromeChainLength(89)) // 24
console.log(palindromeChainLength(10)) // 1