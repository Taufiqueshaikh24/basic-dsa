



export default function findMaxSubArrayUsingSlidingWindowTechnique(arr:number[] , k : number):number{
          let maxSum: number = 0 ;
          let currentSum: number = 0 ;


          for(let i:number = 0 ; i < k ;i++){
               maxSum += arr[i]
               
          }
          console.log(currentSum)

          currentSum  = maxSum; 

          for(let i = k ; i < arr.length ; i++){
               currentSum = currentSum - arr[i - k ] +arr[i]
               maxSum = Math.max(maxSum, currentSum)
          }



        
          return maxSum;
}