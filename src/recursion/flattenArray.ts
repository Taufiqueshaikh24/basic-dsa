



// export const flattenArray = (arr:any):number[] => {
//         if(arr.length == 0){
//             return [];
//         }

//         let res:any = [];

//         for(let i = 0 ; i < arr.length ; i++){
//               if(Array.isArray(arr[i])){
//                 res = res.concat(flattenArray(arr[i]));
//               }else{
//                 res.push([i]);
//               }
//         }

//     return res;
// }


export const flattenArray = (arr: any[]): number[] => {
    if (arr.length === 0) {
        return [];
    }

    let res: number[] = [];

    for (let i = 0; i < arr.length; i++) {
        console.log(res);
        if (Array.isArray(arr[i])) {
            res = res.concat(flattenArray(arr[i]));
        
        } else {
            res.push(arr[i]);
        }
    }

    return res;
};
