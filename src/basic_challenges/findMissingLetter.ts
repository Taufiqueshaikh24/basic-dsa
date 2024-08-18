




export const findMissingLetter = (arr:string[]):string => {
         
      const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDRFGHIJKLMNOPQRSTUVWXYZ';

      const startIndex = alphabet.indexOf(arr[0]);

      const endIndex  = alphabet.indexOf(arr[arr.length - 1]);

    //   for(let i = startIndex ; i <= endIndex ; i++){
    //        if(arr[i] !== alphabet[startIndex + i]){
    //         return alphabet[startIndex + i];
    //        }
    //   }

     for(let i = 0 ; i < arr.length ;  i++){
         if(arr[i] !== alphabet[startIndex + i]){
             return alphabet[startIndex + i]
         }
     }


    return '';
}