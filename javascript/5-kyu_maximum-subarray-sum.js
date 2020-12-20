//The maximum sum subarray problem consists in finding the maximum sum
//    of a contiguous subsequence in an array or list of integers:

var maxSequence = function(arr){
    let result = 0
    let control = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            control = control + arr[j]
            result < control ? result = control : null
        }
        control = 0
    }
    return result
}


maxSequence([]) // 0
maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) // 6