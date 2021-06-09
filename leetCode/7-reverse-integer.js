// 7. Reverse Integer
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

var reverse = function (x) {
    let arr = x.toString().split("")
    let reverseNum;
    let isNegative = arr[0] === "-";
    if (isNegative) {
        reverseNum = parseInt(arr.splice(1, arr.length - 1).reverse().join(""));
    } else {
        reverseNum = parseInt(arr.reverse().join(""));
    }

    if (reverseNum > Math.pow(2, 31) - 1) {
        return 0
    } else {
        return isNegative ? reverseNum * -1 : reverseNum
    }
};

console.log(reverse(123))
console.log("- - - - -")
console.log(reverse(-123))
console.log("- - - - -")
console.log(reverse(1534236469))
console.log("- - - - -")
console.log(reverse(2147483641))