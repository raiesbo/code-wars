// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive
//  alphabetic characters and numeric digits that occur more than once in the
//  input string. The input string can be assumed to contain only alphabets
//  (both uppercase and lowercase) and numeric digits.


function duplicateCount(text){
    const arr = text.toLowerCase().split("");
    let arrControl = []
    let result = 0
    arr.map(() => {
        let letter = arr.shift()
        arr.includes(letter) && !arrControl.includes(letter) ? result++ : null
        arrControl.push(letter)
    })
    return result
}


duplicateCount("") // 0
duplicateCount("abcde") // 0
duplicateCount("aabbcde") // 2
duplicateCount("aabBcde") // 2
duplicateCount("Indivisibility") // 1
duplicateCount("Indivisibilities") // 2