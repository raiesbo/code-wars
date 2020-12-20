// Are they the "same"?

// Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays
//  have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements
//  in a squared, regardless of the order.


const comp = (a, b) => {
    if (!a || !b) return false
    let arrA = a.sort((a, b) => a - b)
    let arrB = b.sort((a, b) => a - b)
    if (JSON.stringify(arrA.map(i => i**2)) === JSON.stringify(arrB)) return true
    return false
}


console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 36100, 25921, 361, 20736, 361])) // false
console.log(comp( [57, 9, 21, 32, 43, 88, 71, 29], [3249, 81, 441, 1024, 1849, 7744, 5041, 841])) // true
console.log(comp([64, 30, 37, 8, 7, 6], [4096, 900, 1369, 64, 49, 36])) // true
console.log(comp([34], [1156])) // true
console.log(comp([], [])) // true
console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [132, 14641, 20736, 361, 25921, 361, 20736, 361])) // false
console.log(comp([42, 91, 57, 100, 13, 84, 15, 67], [1764, 8281, 3249, 10001, 169, 7056, 225, 4489])) // false
