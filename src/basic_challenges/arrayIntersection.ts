





export const arrayIntersection = (arr1:number[] , arr2:number[]):number[] => {

    let arr = [];

      for(let i = 0 ; i < arr1.length; i++){
           if(arr1.includes(arr2[i])){
                arr.push(arr2[i])
           }
      }

      let newarr = [... new Set(arr)].sort()


    return newarr;
}