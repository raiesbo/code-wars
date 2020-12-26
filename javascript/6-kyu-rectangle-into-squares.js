// Rectangle into Squares

// The drawing below gives an idea of how to cut a given "true" rectangle into squares ("true" rectangle meaning that the two dimensions are different).

// alternative text

// Can you translate this drawing into an algorithm?

// You will be given two dimensions

// a positive integer length (parameter named lng)
// a positive integer width (parameter named wdth)
// You will return an array or a string (depending on the language; Shell bash, PowerShell, Pascal and Fortran return a string) with the size of each of the squares.


const sqInRect = (a, b) => {
    let result = []
    if (a == b) return null
    for (let i = Math.min(a, b); i >= 1; i--) {
        while (a * b >= i * i && i <= a && i <= b) {
            if (a * b >= i * i) {
                result.push(i);
                i == a ? b -= i : a -= i
            }
        }
    }
    return result
}



// TESTS
console.log(sqInRect(5, 5)) //, null)
console.log(sqInRect(5, 3)) //, [3, 2, 1, 1])
console.log(sqInRect(3, 5)) //, [3, 2, 1, 1])
console.log(sqInRect(20, 14)) //, [14, 6, 6, 2, 2, 2])
