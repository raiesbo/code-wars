// Return Odd No Matter What

// THIS KATTA WAS TECHNICALLY FOR PYTHON SO IT DOESNT NOT REALLY WORK COMPLETELLY

// Given the integer n return odd numbers as they are, but subtract 1 from even numbers.

// Note: Your solution should be 36 or less characters long.


/* const solve = n => {
    if (n % 2 != 0) return n
    for (let i = n - 1; i > 0; i--) if (i % 2 != 0) return i
} */


const solve = n => { 
    for (let i = n; i > 0; i--) if (i % 2 != 0) return i
}




console.log(solve(2)) // 1
console.log(solve(13)) // 13
console.log(solve(46)) // 45

