// ⚠️Fusion Chamber Shutdown⚠️


// A laboratory is testing how atoms react in ionic state during nuclear fusion. They introduce different
//  elements with Hydrogen in high temperature and pressurized chamber. Due to unknown reason the chamber
//   lost its power and the elements in it started precipitating

// Given the number of atoms of Carbon [C],Hydrogen[H] and Oxygen[O] in the chamber. Calculate how many molecules
//  of Water [H2O], Carbon Dioxide [CO2] and Methane [CH4] will be produced following the order of reaction affinity below

// 1. Hydrogen reacts with Oxygen   = H2O
// 2. Carbon   reacts with Oxygen   = CO2
// 3. Carbon   reacts with Hydrogen = CH4

// FOR EXAMPLE:
// (C,H,O) = (45,11,100)
// return no. of water, carbon dioxide and methane molecules
// Output should be like:
// (5,45,0)



const burner = (C, H, O) => {
    let h2o, co2, ch4;
    console.log("H:", H, "C:", C, "O:", O)
    Math.floor(H / 2) < O ? h2o = Math.floor(H / 2) : h2o = O
    H -= h2o * 2;
    O -= h2o;
    // console.log("H:", H, "C:", C, "O:", O, "h2o:", h2o)

    Math.floor(O / 2) < C ? co2 = Math.floor(O / 2) : co2 = C;
    C -= co2;
    O -= co2 * 2;
    // console.log("H:", H, "C:", C, "O:", O, "co2:", co2)

    Math.floor(H / 4) < C ? ch4 = Math.floor(H / 4) : ch4 = C;
    C -= ch4;
    H -= ch4 * 4;
    // console.log("H:", H, "C:", C, "O:", O, "ch4:", ch4)

    return [h2o, co2, ch4]
}

// TESTS
console.log(burner(45, 11, 100)) // [5, 45, 0]
// console.log(burner(354, 1023230, 0)) //, [0, 0, 354]
// console.log(burner(939, 3, 694)) //, [1, 346, 0]
// console.log(burner(215, 41, 82100)) //, [20, 215, 0]
// console.log(burner(113, 0, 52)) //, [0, 26, 0]

// console.log(burner(160, 198, 141)) // [ 99, 21, 0 ]
console.log(burner(14, 304, 227)) // [ 152, 14, 0 ]
