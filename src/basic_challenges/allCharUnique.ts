




export const allCharUnique = (str:string):boolean => {

        const newSet = [...new Set(str)].join('');
        
         if(str !== newSet){ return false}
        
        console.log(newSet); 
      

    return true ; 
}


export const allCharUniqueUsingForLoop = (str:string):boolean => {

      let char:any = {};

      for(let i = 0 ;  i < str.length ; i++){
                
        if(char[str[i]]){
             return false;
        }

        char[str[i]] = true
        console.log(char);
    }
            
   return true
}


export const allCharUniqueUsingSet = (str:string):boolean => {

    let charSet:any = new Set();

    for(let i = 0 ; i < str.length ; i++){
         if(charSet.has(str[i])){
            return false ; 
         }

         charSet.add(str[i])
    }

    return true;
}