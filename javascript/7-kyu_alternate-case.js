// Alternate case

// Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD


const alternateCase = s => {
    return s.split("").map(i => i == i.toLowerCase() ? i.toUpperCase() : i.toLowerCase()).join("");
}


// TESTS
console.log(alternateCase("abc")) // "ABC"
console.log(alternateCase("ABC")) // "abc"
console.log(alternateCase("Hello World")) // "hELLO wORLD"