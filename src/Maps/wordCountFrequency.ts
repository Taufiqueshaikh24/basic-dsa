


export const wordCountFrequency = (str:string) => {
         let newStr = str.toLowerCase().split(' ');
          console.log(newStr);
        const map = new Map();
        for(let i = 0 ; i < newStr.length; i++){
                if(newStr[i] === ''){ continue};

                if(map.has(newStr[i])){
                    map.set(newStr[i] , map.get(newStr[i]) + 1)
                }else{
                     map.set(newStr[i] , 1)
                }
        }
            // console.log(map);
    return map;
}