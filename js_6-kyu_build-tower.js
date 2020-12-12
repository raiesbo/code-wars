// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

function towerBuilder(nFloors) {
    let tree = []
    for(let i = 0; i < nFloors; i++) {
        const spaces = " ".repeat(nFloors - i - 1)
        const stars = "*".repeat(i * 2 + 1)
        tree.push(spaces + stars + spaces)
    }
    console.log(tree)
    return tree
}



towerBuilder(1) // ["*"]
towerBuilder(2) // [" * ","***"]
towerBuilder(3) // ["  *  "," *** ","*****"]