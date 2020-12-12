// Kyu 6_Your order, please:

function order(words){
  let result = [];
  let arr = words.split(' ');
  for (var y = 1; y < arr.length+1; y++) {
    //console.log(y);
    for (var i = 0; i < arr.length; i++ ) {
      //console.log(arr[i]);
      if (arr[i].includes(y)) {
        result.push(arr[i]);
      }
    }
   
  }
  //console.log(result.join().replace(/,/g, " "));
  return result.join().replace(/,/g, " ");
};




order("is2 Thi1s T4est 3a");
order("4of Fo1r pe6ople g3ood th5e the2");