


export const titleCase = (str:string):string => {
        
    let arr = str.split(' ');
    let word;
    for(let i = 0 ; i < arr.length ;  i++){
                  arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
                  word = arr.join(' ');
                  
           
    }



    return word as string;
}