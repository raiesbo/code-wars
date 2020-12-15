// Give me a Diamond

// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters.
//  Trailing spaces should be removed, and every line must be terminated with a newline character (\n).


const diamond = (n) =>{
    if (n <= 0 || n % 2 == 0) return null
    let res = ""
    for (let i = 1; i < Math.round((n + 2) / 2); i++) {
        res += " ".repeat(n - i - (Math.floor(n/2))) + "*".repeat(i*2 - 1) + "\n"
    }
    for (let i = 1; i < Math.round((n) / 2); i++) {
        res += " ".repeat(i) + "*".repeat(n - i*2) + "\n"
    }
    return res;
}


console.log(diamond(1)) // "*\n"
console.log(diamond(3)) // " *\n***\n *\n"
console.log(diamond(5)) // "  *\n ***\n*****\n ***\n  *\n"
console.log(diamond(2)) // null
console.log(diamond(-3)) // null
console.log(diamond(0)) // null