// Valid Spacing
// Your task is to write a function called valid_spacing() or validSpacing() which
//  checks if a string has valid spacing. The function should return either True or False.

const validSpacing = s => s == s.replace(/\s+/g, ' ').trim()

console.log(validSpacing('Hello world')) // true
console.log(validSpacing(' Hello world')) // false
console.log(validSpacing('Hello  world ')) // false
console.log(validSpacing('Hello')) // true
console.log(validSpacing('Helloworld')) // true
