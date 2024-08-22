




export const  symettricDifference = (arr1:number[] , arr2:number[]):number[] => {

    let arr = [];
        let set  = new Set(arr1);
        let set2 = new Set(arr2);
     
        for(let i = 0 ; i < arr1.length ; i++){
            if(!set2.has(arr1[i])){
                    arr.push(arr1[i])
                    
            }
        }
        for(let i = 0 ; i < arr2.length ; i++){
            if(!set.has(arr2[i])){
                    arr.push(arr2[i])
                    
            }
        }

          console.log(arr);
               
    return [];
}