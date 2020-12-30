// Twice linear

// Consider a sequence u where u is defined as follows:

// The number u(0) = 1 is the first one in u.
// For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
// There are no other numbers in u.
// Ex: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]

// 1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...

// Task:
// Given parameter n the function dbl_linear (or dblLinear...) returns the element u(n) of the ordered (with <) sequence u
// (so, there are no duplicates).

// Example:
// dbl_linear(10) should return 22

// Note:
// Focus attention on efficiency


// const dblLinear = n => {
//     const result = [1];

//     for (let i = 0; i < 2 * n / 3; i++) {
//         let x = result[i]
//         let y = 2 * result[i] + 1
//         let z = 3 * result[i] + 1

//         !result.includes(x) && result.push(x)
//         !result.includes(y) && result.push(y)
//         !result.includes(z) && result.push(z)

//         result.sort((a, b) => a - b)
//     }
//     // console.log(result)
//     return result[n]
// }

const dblLinear = n => {
    const result = [1];
    let ctr = result.length - 1

    while (result.length <= n + n * 2 / 6 ) {
        result.sort((a, b) => a - b)

        let x = result[ctr]
        let y = 2 * result[ctr] + 1
        let z = 3 * result[ctr] + 1

        !result.includes(x) && result.push(x)
        !result.includes(y) && result.push(y)
        !result.includes(z) && result.push(z)

        ctr ++
    }

    console.log(result)
    return result[n]
}



// TESTS
console.log(dblLinear(10)) // 22
console.log(dblLinear(20)) // 57
// console.log(dblLinear(30)) // 91
// console.log(dblLinear(50)) // 175
// console.log(dblLinear(100)) // 447
// console.log(dblLinear(6000)) // 80914