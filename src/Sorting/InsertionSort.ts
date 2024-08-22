




export const InsertionSort = (arr:number[]):number[] => {
    // 435,32,5,553,56,2,57,2
    for(let i = 0 ; i < arr.length ; i++){
         let currentElement = arr[i];
        //  j will make one postion empty to put the unsorted element to sorted
         let j  = i - 1 
            //  if arr[j] greater than the current element then put the put the current element into arr[j]
            console.log(arr[j] , currentElement , arr[j + 1]);
         while(j >= 0 && arr[j] > currentElement ){
               arr[j + 1] = arr[j];
               j--
         }
         arr[j + 1] = currentElement;
    }



    return arr;
}