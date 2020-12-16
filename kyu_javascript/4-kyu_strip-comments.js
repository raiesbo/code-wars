// Strip Comments

// Complete the solution so that it strips all text that follows any of a set of comment markers passed in.
//  Any whitespace at the end of the line should also be stripped out.


const solution = (input, markers) => {
    let arr = input.split("\n")
    let result = ""
    for (let item of markers) arr = arr.map(i => i.indexOf(item) >= 0 ? i.slice(0, i.indexOf(item)).trim() : i)
    arr.forEach(i => i != arr[arr.length-1] ? result += i + "\n" : result += i)
    return result
}


console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])) // "apples, pears\ngrapes\nbananas"








