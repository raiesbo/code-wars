// Given a string s, find the length of the longest substring without repeating characters.

const lengthOfLongestSubstring = function (s) {
    let maxCount = 0;
    let singleCount = 0;
    let usedLetters = [];
    if (s.length === 0) return 0
    if (s.length === 1) return 1
    for (let i = 0; i < s.length; i++) {
        if (usedLetters.length === 0) {
            usedLetters.push(s[i])
            singleCount++
            // console.log("start", s[i], "counts", singleCount, maxCount)
        }
        for (let j = i + 1; j < s.length; j++) {
            if (!usedLetters.includes(s[j])) {
                singleCount++
                usedLetters.push(s[j])
                // console.log(s[i], s[j], "counts", singleCount, maxCount)
            } else if (usedLetters.includes(s[j])) {
                if (singleCount > maxCount) maxCount = singleCount
                // console.log("iqual", s[i], s[j], "counts", singleCount, maxCount)
                singleCount = 1;
                usedLetters = [s[i + 1]]
                break;
            }
        }
    }
    if (singleCount + 1 > maxCount) maxCount = singleCount
    return maxCount
};

console.log(lengthOfLongestSubstring("abcabcbb"))
console.log("- - - - - -")
console.log(lengthOfLongestSubstring(" "))
console.log("- - - - - -")
console.log(lengthOfLongestSubstring("au"))
console.log("- - - - - -")
console.log(lengthOfLongestSubstring(""))
console.log("- - - - - -")
console.log(lengthOfLongestSubstring("dvdf"))