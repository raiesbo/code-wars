// Operations on sequences

const BN = require('bignumber.js');

function solve(arr) {
    let num = new BN(1)
    let sol = []
    for (let i = 0; i < arr.length; i += 2) {
        num = num.times(arr[0 + i]*arr[0 + i] + arr[1 + i]*arr[1 + i]) 
    }
    for (let i = 2; i < Math.ceil(Math.sqrt(num)); i++) {
        if (Math.sqrt(num - i**2) % 1 === 0) {
            let r = new BN(i)
            sol = [ r.toNumber(), (num.minus(r.exponentiatedBy(2))).squareRoot().toNumber() ]
            break;
        }
    }
    return sol
}

console.log(solve([2, 1, 3, 4])) // [2, 11] , 125
console.log(solve([1, 3, 1, 2, 1, 5, 1, 9])) // [250, 210] , 106600
console.log(solve([3, 9, 8, 4, 6, 8, 7, 8, 4, 8, 5, 6, 6, 4, 4, 5])) // [13243200, 25905600]
console.log(solve([4, 3, 4, 2, 4, 5, 5, 9])) // [870, 1190] , 2173000
console.log(solve([3, 2, 5, 5, 4, 2, 6, 6, 9, 3, 3, 2, 3, 7, 2, 3, 4, 9, 6, 7, 3, 8, 8, 7, 6, 3, 6, 6, 4, 4, 5, 3, 9, 8, 3, 9, 2, 2, 6, 6])) // [BN("20534466401280000"), BN("32656316659200000")]
console.log(solve([8, 7,  8, 6, 5,  5,  7, 2, 2,  8, 5, 5,  8, 10, 9, 7, 10, 9, 6, 10])) // [1374771,7309774025] , 2173000



// 1.488099328131241e+33
// 1.4880993281312406429302784e+33
// 1.4880993281312406429302784e+33 sould!

/* function solve(arr) {
    let num = 1
    let sol = []
    for (let i = 0; i < arr.length; i += 2) {
        num *= (arr[0 + i]*arr[0 + i] + arr[1 + i]*arr[1 + i])
    }
    for (let i = 2; i < Math.ceil(Math.sqrt(num)); i++) {
        for (let j = 0; j < Math.ceil(Math.sqrt(num)); j++) {
             i**2 + j**2 == num ? sol.push([i, j]) : null
        }
    }
    console.log(sol[6] ? sol[6] : sol[0])
    return sol[6] ? sol[6] : sol[0]
}
 */



/* describe("solve",function() {

function check(arr, actual, exp) {
      if (actual.length !== 2)
          return false;
      let r0 = new BN(actual[0]), r1 = new BN(actual[1]);
      let s0 = new BN(exp[0]), s1 = new BN(exp[1]);
      if (r0.isLessThan(new BN(0)) || r1.isLessThan(new BN(0))) {
          console.log("A and B should be non negative 0");
          return false;
      } 
      let p = s0.multipliedBy(s0).plus(s1.multipliedBy(s1));
      console.log("Product to get", p.toString());
      let q = r0.multipliedBy(r0).plus(r1.multipliedBy(r1));
      console.log("Your A*A + B*B", q.toString());
      return p.isEqualTo(q);
  }
  function testing(arr, exp) {
      console.log("Testing ", arr)
      let actual = solve(arr)
      console.log("Actual         ", actual.toString())
      console.log("Possible expect", exp.toString())
      let bl = check(arr, actual, exp)
      if (bl == false)
          console.log("Error")
      else
          console.log("Correct")
      console.log("_")
      assert.equal(bl, true);
  } */