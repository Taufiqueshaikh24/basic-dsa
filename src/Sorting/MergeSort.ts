



export const MergeSort = (arr:number[]):any => {
        if(arr.length === 1){
            return arr; 
        }

    const mid  = Math.floor(arr.length / 2);
    const left  = MergeSort(arr.slice(0 , mid));
    const right = MergeSort(arr.slice(mid))

    return merge(left , right);
}

const merge = (left:number[], right:number[]) => {
         const mergred  = []
         let leftIndex = 0 ;
         let rightIndex = 0 ; 

         while(leftIndex < left.length && rightIndex < right.length ){
            if(left[leftIndex] < right[rightIndex]){
                mergred.push(left[leftIndex])
                leftIndex++
            }else{
                 mergred.push(right[rightIndex])
                 rightIndex++
            }
         }
     return mergred.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}