// Sum The Strings

// Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string):


const sumStr = (a, b) => "" + (parseInt((a ? a : 0)) + parseInt(b ? b : 0))


// TESTS
console.log(sumStr("4","5")) // "9");
console.log(sumStr("34","5")) //, "39");