


export const BinarySeach = (arr:number[], target:number):string | boolean | number => {

    let low = 0 ; 
    let high  = arr.length ;
    
    do{
        // [1,2,3,4,5,6,7,8,9,10]
        let mid = Math.floor(low + (high - low) / 2);
        let value = arr[mid];

        if(value === target){
             return target
        }else if(value > target){
            high = mid
        }else{
            low = mid + 1
        }

        console.log("mid",mid);
        console.log("low",low);
    }while(low < high)

     return false;
}
