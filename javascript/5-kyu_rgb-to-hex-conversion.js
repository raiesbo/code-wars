// RGB To Hex Conversion

// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal
//  representation being returned. Valid decimal values for RGB are 0 - 255.
//  Any values that fall out of that range must be rounded to the closest valid value.


const rgb = (r, g, b) => {
    const binaryColor = [r, g, b]
    let hexaColor = ""
    for (let color of binaryColor) {
        if (color > 255) color = 255
        if (color < 0) color = 0
        let division = [parseInt(color / 16), color % 16]
        for (let num of division) {
            if (num == 10) {
                hexaColor += "A"
            } else if (num == 11) {
                hexaColor += "B"
            } else if (num == 12) {
                hexaColor += "C"
            } else if (num == 13) {
                hexaColor += "D"
            } else if (num == 14) {
                hexaColor += "E"
            } else if (num == 15) {
                hexaColor += "F"
            } else {
                hexaColor += num
            }
        }
    }
    return hexaColor
}


console.log(rgb(255, 255, 255)) // returns FFFFFF
console.log(rgb(255, 255, 300)) // returns FFFFFF
console.log(rgb(0,0,0)) // returns 000000
console.log(rgb(148, 0, 211)) // returns 9400D3