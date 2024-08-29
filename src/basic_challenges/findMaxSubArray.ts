


export default function MaxSubArray(arr:number[] , k :number):number{
     let maxSum : number = 0 ; 

     
     let currentSum:number; 
     for(let i = 0 ; i < arr.length - k  ; i++){
        currentSum = 0
          for(let j = i ; j < i + k  ; j++ ){
                currentSum += arr[j]
            }

            
            maxSum = Math.max(maxSum , currentSum)
        }

        
    return maxSum
}