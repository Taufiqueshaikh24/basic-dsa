



export const LinearSearch = (arr:number[] , targetVal:number): boolean => {

        for(let i = 0 ; i < arr.length ; i++){
              if(arr[i] === targetVal){
                return true;
              }
        }
            
     return false ; 
}