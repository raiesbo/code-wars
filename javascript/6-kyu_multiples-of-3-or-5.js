// If we list all the natural numbers below 10 that are multiples of 3 or 5,
//    we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5
//      below the number passed in.

function solution(number){
    let multiples = []
    let result = 0
    for(let i = 2; i < number; i++) {
        if (5 % i == 0 || 3 % i == 0 || i % 5 == 0 || i % 3 == 0) {
            if (!multiples.includes(i)) {
                multiples.push(i)
                result = result + i
            }
        }
    }
    return result
}


  solution(10) // 23