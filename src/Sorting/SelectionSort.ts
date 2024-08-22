



export const SelectionSort = (arr:number[]):number[] => {
    //    outer loop which will iterate through the array
     for(let i = 0 ; i < arr.length - 1  ; i++){
          let minIndex = i
        //   console.log(arr[i])
        // Inner loop will check that if j + 1 which is the current index  greater is than  the minindex
        // then set the min index to current index
        for(let j = i + 1 ; j < arr.length ; j++){
              if(arr[j] < arr[minIndex]){
                  minIndex  = j
              }
        }
        // swap the elements
        if(minIndex !== i){
            [arr[i] , arr[minIndex]] = [arr[minIndex] , arr[i]]
        }
     }

    return arr;      
}
