//Split Strings

// Complete the solution so that it splits the string into pairs of two characters.
//  If the string contains an odd number of characters then it should replace the missing
//  second character of the final pair with an underscore ('_').


const solution = str => {
    let res = []
    for (let i = 0; i < str.length; i += 2) {
        if (!str[i + 1]) {
            res.push(str[i] + "_")
            break;
        }
        res.push(str[i] + str[i + 1])
    }
    return res;
}


console.log(solution('a')) // should return ['a_']
console.log(solution('abc')) // should return ['ab', 'c_']
console.log(solution('abcdef')) // should return ['ab', 'cd', 'ef']