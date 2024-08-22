




export const BubbleSortUsingOneLoop = (arr:number[]):number[] => {
      let swapped = false ; 
      
      while(!swapped){
           swapped = true

           for(let i:number = 0 ; i < arr.length ; i++){
                   if(arr[i] > arr[i + 1]){
                       let temp = arr[i];
                       arr[i] = arr[i + 1];
                       arr[i + 1] = temp
                       swapped = false;
                   }
           }
      }


    return arr;
}