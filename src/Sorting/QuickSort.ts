



export const QuickSort = (arr:number[]) : number[] => {

    if(arr.length <= 1){
        return arr;
    }

    let pivot  = arr[arr.length - 1];
    const left = [];
    const right  = [];

    for(let i:number = 0 ;  i < arr.length; i++){
        if(arr[i] === arr[arr.length -1]) continue;
          if(arr[i] < pivot){
              left.push(arr[i])
          }else{
               right.push(arr[i])
          }
    }

    
    console.log(left)
    console.log(right)

    return [...QuickSort(left) , pivot , ...QuickSort(right)];
}