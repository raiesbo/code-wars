function deleteNth(arr,n){
    let newArr = []
    
    for (let i = 0; i < arr.length; i++) {
      let counter = 0
      
      for (let j = 0; j < newArr.length; j++) {
        newArr[j] == arr[i] && counter++
      }
      counter < n && newArr.push(arr[i])
      counter = 0
    }
    
    return newArr;
  }

deleteNth([20,37,20,21], 1) // [20,37,21]
deleteNth([1,1,3,3,7,2,2,2,2], 3) // [1, 1, 3, 3, 7, 2, 2, 2]