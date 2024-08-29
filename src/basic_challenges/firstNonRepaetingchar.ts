




export const firstNonRepeatingCharacter = (str:string):string => {

    let char:any = {};
    let char2 : any = {};
    // for(const count of str){
    //     char[count] = (char[count] ||  0) + 1
    //         // console.log(char);

    //         for(const count of str){
    //              if(char[count] === 1){
    //                    return count;
    //              }
    //         }

    // }

    for(let i = 0 ; i < str.length ; i++){
        char[str[i]] = (char[str[i]] || 0 ) + 1;

        for(let i = 0 ; i < str.length ; i++){
               if(char[str[i]] === 1){
                   return str[i]
               }
        }
    }

   

    return '';
}





