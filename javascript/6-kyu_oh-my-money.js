// Oh! My Money!

// We should add comma between every 3 numbers


const money = (n) =>  n.toString().length >= 4 ? n.toString().split("").reverse().join("").match(/.{1,3}/g).join(",").split("").reverse().join("") : n.toString()


console.log(money(12)) // '12'
console.log(money(1234567)) // '1,234,567'