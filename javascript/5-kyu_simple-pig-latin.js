// Simple Pig Latin

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.


const pigIt = str =>  str.split(" ").map(i => i.match(/^[A-Za-z]+$/) ? i.slice(1) + i.slice(0, 1) + "ay" : i).join(" ");


console.log(pigIt('Pig latin is cool')) // 'igPay atinlay siay oolcay'
console.log(pigIt('This is my string')) // 'hisTay siay ymay tringsay'