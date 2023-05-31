function bubbleSort(arr){
    for(let i = arr.length; i > 0; i--){
      let noSwaps = true;
      for(let j = 0; j < i-1; j++){
        if(arr[j] > arr[j+1]){
          [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
          noSwaps = false;
        }
      }  
      if(noSwaps) break;
    }
  
    return arr
    
  }
  
  console.log(bubbleSort([29, 10, 14, 37, 30, 17]));