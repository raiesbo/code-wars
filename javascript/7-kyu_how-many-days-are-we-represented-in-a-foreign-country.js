// How many days are we represented in a foreign country?

// My colleagues make business trips to a foreign country.
// We must find the number of days our company is represented in a country.
// Every day that one or more colleagues are present in the country is a day that the company is represented.
// A single day cannot count for more than one day.

// Write a function that recieves a list of pairs and returns the number of days that the company is represented
// in the foreign country. The first number of the pair is the number of the day of arrival and the second number
// of the pair is the day of departure of someone who travels, i.e. 1 january is number 1 and 31 of december is 365.


const daysRepresented = (arr) => {
    let sortedArr = arr.sort((a, b) => a[0] - b[0])
    // Days correction (in case repetition)
    let result = 0
    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i + 1] && sortedArr[i][1] >= sortedArr[i + 1][0] && sortedArr[i][1] < sortedArr[i + 1][1]) {
            result += sortedArr[i + 1][0] -1 - sortedArr[i][0] + 1
        } else if (sortedArr[i - 1] && sortedArr[i][0] >= sortedArr[i - 1][0] && sortedArr[i][1] <= sortedArr[i - 1][1]) {
            continue;
        } else {
            result += sortedArr[i][1] - sortedArr[i][0] + 1
        }
    }
    return result
}


console.log(daysRepresented([[10,17],[200,207]])) // 16
console.log(daysRepresented([[10,15],[25,35]])) // 17
console.log(daysRepresented([[2,8], [220,229],[10,16]])) // 24 
console.log(daysRepresented([[ 2, 8 ], [ 6, 16 ], [ 17, 26 ]])) // 25
console.log(daysRepresented([[ 321, 352 ], [ 57, 74 ], [ 171, 207 ], [ 307, 335 ], [ 302, 328 ], [ 242, 254 ]])) // 119 
console.log(daysRepresented([[ 32, 61 ], [ 176, 197 ], [ 213, 250 ], [ 44, 61 ], [ 186, 193 ], [ 8, 45 ]])) // 114 


/* const daysRepresented = (arr) => {
    let sortedArr = arr.sort((a, b) => a[0] - b[0])
    // Days correction (in case repetition)
    let fixedArr = []
    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i + 1] && sortedArr[i][1] >= sortedArr[i + 1][0] && sortedArr[i][1] < sortedArr[i + 1][1]) {
            fixedArr.push([ sortedArr[i][0], sortedArr[i + 1][0] -1 ])
        } else if (sortedArr[i - 1] && sortedArr[i][0] >= sortedArr[i - 1][0] && sortedArr[i][1] <= sortedArr[i - 1][1]) {
            continue;
        } else {
            fixedArr.push(sortedArr[i])
        }
    }
    for (let i = 0; i < sortedArr.length; i++) console.log(sortedArr[i], fixedArr[i])
    // Filtering and reducing
    let result = fixedArr.map(i => i.reduce((a, b) => b - a, 1)).reduce((a, b) => a + b, 0)
    return result
} */