// Fibonacci, Tribonacci and friends


function Xbonacci(signature,n){
    const len = signature.length;
    if (len >= n) return signature.slice(0, n)
    let result = signature
    let arr = result.slice(-len)
    let ctl = 0
    while (result.length < n) {
        for (let i = 0; i < arr.length; i++) {
            ctl += arr[i]
        }
        result.push(ctl)
        ctl = 0
        arr = result.slice(-len)
    }
    return result
}


console.log(Xbonacci([0,1],10)) // [0,1,1,2,3,5,8,13,21,34]
console.log(Xbonacci([1,1],10)) // [1,1,2,3,5,8,13,21,34,55]
console.log(Xbonacci([0,0,0,0,1],10)) // [0,0,0,0,1,1,2,4,8,16]
console.log(Xbonacci([1,0,0,0,0,0,1],10)) // [1,0,0,0,0,0,1,2,3,6]
console.log(Xbonacci([1,0,0,0,0,0,0,0,0,0],20)) // [1,0,0,0,0,0,0,0,0,0,1,1,2,4,8,16,32,64,128,256]
console.log(Xbonacci([3, 2, 1, 7, 4, 11, 15, 0, 16, 8, 10, 16, 20, 5, 1, 12], 4)) // [3, 2, 1, 7]

