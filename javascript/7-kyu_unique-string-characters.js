// Unique string characters

// In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.

// For example:

// solve("xyab","xzca") = "ybzc" 
// --The first string has 'yb' which is not in the second string. 
// --The second string has 'zc' which is not in the first string. 
// Notice also that you return the characters from the first string concatenated with those from the second string.


const solve = (a, b) => {
    let uniquesA = ""
    let uniquesB = ""
    for (let i = 0; i < b.length; i++) a.includes(b[i]) ? null : uniquesB += b[i]
    for (let i = 0; i < a.length; i++) b.includes(a[i]) ? null : uniquesA += a[i]
    console.log(uniquesA, uniquesB)
    return uniquesA + uniquesB
}


// TESTS
console.log(solve("xyab","xzca")) // "ybzc"
console.log(solve("xyabb","xzca")) // "ybbzc"
console.log(solve("abcd","xyz")) // "abcdxyz"
console.log(solve("xxx","xzca")) // "zca"