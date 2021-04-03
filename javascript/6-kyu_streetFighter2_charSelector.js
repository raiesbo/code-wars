// Street Fighter 2 - Character Selection


// Short Intro

// Some of you might remember spending afternoons playing Street Fighter 2 in some Arcade back in the 90s or emulating it nowadays with the numerous emulators for retro consoles.

// Can you solve this kata? Suuure-You-Can!

// UPDATE: a new kata's harder version is available here.

// The Kata

// You'll have to simulate the video game's character selection screen behaviour, more specifically the selection grid. Such screen looks like this:

// Screen:

// screen

// Selection Grid Layout in text:

// | Ryu  | E.Honda | Blanka  | Guile   | Balrog | Vega    |
// | Ken  | Chun Li | Zangief | Dhalsim | Sagat  | M.Bison |
// Input

// the list of game characters in a 2x6 grid;
// the initial position of the selection cursor (top-left is (0,0));
// a list of moves of the selection cursor (which are up, down, left, right);
// Output

// the list of characters who have been hovered by the selection cursor after all the moves (ordered and with repetition, all the ones after a move, wether successful or not, see tests);
// Rules

// Selection cursor is circular horizontally but not vertically!

// As you might remember from the game, the selection cursor rotates horizontally but not vertically; that means that if I'm in the leftmost and I try to go left again I'll get to the rightmost (examples: from Ryu to Vega, from Ken to M.Bison) and vice versa from rightmost to leftmost.

// Instead, if I try to go further up from the upmost or further down from the downmost, I'll just stay where I am located (examples: you can't go lower than lowest row: Ken, Chun Li, Zangief, Dhalsim, Sagat and M.Bison in the above image; you can't go upper than highest row: Ryu, E.Honda, Blanka, Guile, Balrog and Vega in the above image).



const streetFighterSelection = (fighters, position, moves) => {

    const arr = []

    let coordX = position[0]
    let coordY = position[1]

    for (let move of moves) {
        switch (move) {
            case "up":
                coordY === 0 ? null : coordY = 0
                arr.push(fighters[coordY][coordX],)
                break;
            case "down":
                coordY === 1 ? null : coordY = 1
                arr.push(fighters[coordY][coordX],)
                break;
            case "left":
                if (coordX === 0) {
                    coordX = fighters[coordY].length - 1
                } else {
                    coordX = coordX - 1
                }
                arr.push(fighters[coordY][coordX],)
                break;
            case "right":
                if (coordX === fighters[coordY].length - 1) {
                    coordX = 0
                } else {
                    coordX = coordX + 1
                }
                arr.push(fighters[coordY][coordX],)
                break;
        }
    }
    return arr
}



// tests:

moves = ['up', 'left', 'right', 'left', 'left']

const fighters = [
    ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
    ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
]

console.log(streetFighterSelection(fighters, [0, 0], moves))