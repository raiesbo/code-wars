// 5 kyu Directions Reduction

function dirReduc(arr){
    let newArr = arr
    for (let j = 0; j < 3; j++) {
        for (let i = 0; i < newArr.length; i++) {
            newArr[i] == "NORTH" && newArr[i + 1] == "SOUTH" ? newArr.splice(i, 2) : null
            newArr[i] == "SOUTH" && newArr[i + 1] == "NORTH" ? newArr.splice(i, 2) : null
            newArr[i] == "EAST" && newArr[i + 1] == "WEST" ? newArr.splice(i, 2) : null
            newArr[i] == "WEST" && newArr[i + 1] == "EAST" ? newArr.splice(i, 2) : null
        }
    }
    return newArr
  }


dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]) // ["WEST"]
dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]) // ["NORTH", "WEST", "SOUTH", "EAST"]
dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]) // []