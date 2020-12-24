// How much Kata should I complete?

// I have a competition with my uncle on Codewars. So I want to be at least on the same level as he is.
// I am learning how to solve Katas and become better with each kyu.
// In this Kata imagine that I can solve only Katas from my own level or lower (kyu level).
//  Return the minimum of Katas number that I have to solve to get at least the same score. Also my score is equal to start of my kyu's score.

// INPUT
// function howMuchTo( score, current )

// score - my uncle's score. (0 <= score <= 250000)
// current - my current kyu. (String in format "(kyu|dan)_N", where 1 <= N <= 8)

// OUTPUT
// The number of Katas I have to solve to get at least given score.

// Useful info
// You can check this on Codewars Wiki but I'll preload 2 objects: solvingScore with data about getting score for each Kata
//  level and requiredScore with data about required score for promotion.
// On 1-2 dan level I continue completing 1 kyu Katas.


const howMuchTo = (score, current) => {
    let myScore = levels[current];
    const uncleScore = score;
    let kataNum = 0;
    let arrLvl = Object.keys(points)

    while (myScore < uncleScore) {
        //!Object.keys(points).includes(current) ? current = "kyu_1" : null
        myScore += points[current]
        
        // LEVEL UP CHECKING
        let nextLvl = arrLvl[arrLvl.indexOf(current) + 1]
        //console.log(nextLvl, kataNum, myScore, uncleScore, levels[current], levels[nextLvl])
        if (myScore >= levels[nextLvl]) {
            current = nextLvl
        }
        kataNum++
    }
    return kataNum
}

// EXTRA DATA
const levels = {
    "kyu_8": 0,
    "kyu_7": 20,
    "kyu_6": 76,
    "kyu_5": 229,
    "kyu_4": 643,
    "kyu_3": 1768,
    "kyu_2": 4829,
    "kyu_1": 13147,
    "dan_1": 35759,
    "dan_2": 97225
}

const points = {
    "kyu_8": 2,
    "kyu_7": 3,
    "kyu_6": 8,
    "kyu_5": 21,
    "kyu_4": 55,
    "kyu_3": 149,
    "kyu_2": 404,
    "kyu_1": 1097,
    "dan_1": 1097,
    "dan_2": 1097
}

// TESTS
console.log(howMuchTo(20, 'kyu_8')) // 10
console.log(howMuchTo(20, 'kyu_7')) // 0
console.log(howMuchTo(76, 'kyu_8')) // 29
console.log(howMuchTo(100000, 'dan_1')) // 59 
console.log(howMuchTo(250000, 'kyu_8')) // 347 // myresult: 348
console.log(howMuchTo(242942,'dan_2')) // 134 // myresult: 133