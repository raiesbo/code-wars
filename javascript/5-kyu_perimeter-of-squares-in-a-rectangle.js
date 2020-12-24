// Perimeter of squares in a rectangle

// The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8.
// It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80

// Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:


const perimeter = (n) => {
    let arr = [];
    while (arr.length < n + 1) {
        arr[arr.length - 2] ? arr.push(arr[arr.length - 1] + arr[arr.length - 2]) : arr.push(1)
    }
    return arr.reduce((a, b) => a + b) * 4
}


// TESTS
console.log(perimeter(0)) // 4
console.log(perimeter(5)) // 80
console.log(perimeter(7)) // 216