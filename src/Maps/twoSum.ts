




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