




export const twoSum = (arr:number[], num:number):number[] => {
       let newArr:number[] = [];
       let set = new Set()

       for(let i = 0 ; i < arr.length ; i++){
              const  c = num - arr[i];
              if(set.has(c)){
                   return [arr.indexOf(c) , i]
              }
              set.add(arr[i])
       }

   
    return [...set] as number[];
}


function twoSumUsingTwoPointer(nums: number[], target: number): number[] {
       let left = 0;
       let right = nums.length - 1;
       nums.sort((x , y) => x -y);
       while (left < right) {
           const sum = nums[left] + nums[right];
   
           if (sum === target) {
               return [left, right];
           } else if (sum < target) {
               left++;
           } else {
               right--;
           }
       }
   
       throw new Error("No two sum solution");
       return [];
   }


   function twoSumUsingBruteForce(nums:number[], target:number):number[] {
       let left = 0;
       let right = nums.length - 1;
   
            for(let i =  0 ; i < nums.length ; i++){
                for(let j = 0 ; j < nums.length ; j++){
                    if(nums[i] + nums[j] === target){
                        return [i , j]
                    }
                }
            }
   
       throw new Error("No two sum solution");
       return [];
   }
   
   // Example usage
   const nums = [2, 7, 11, 15];
   const target = 9;
   console.log(twoSum(nums, target)); // Output: [0, 1]
   