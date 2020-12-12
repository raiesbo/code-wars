// Kyu6_Equal Sides Of An Array:

function findEvenIndex(arr) {
  let ctr = 0;
  for (let i = 0; i < Math.floor(arr.length/2); i++) {
    if (arr[i] == arr[arr.length -1 - ctr]) {
      ctr++;
    }
  }
  if (ctr === 0) {
    return -1;
  } else {
    return ctr;
  }
};


findEvenIndex([1,2,3,4,3,2,1])