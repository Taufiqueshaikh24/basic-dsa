




export const AnagramGrouping = (str:string[]):string[][] => {

    const map  = new Map();
    
    for(let i = 0 ; i < str.length ; i++){
        let sort = str[i].split('').sort().join('');
        if(map.has(sort)){
            map.get(sort).push(str[i]) 
        }else{
            map.set(sort , [str[i]])
        }
    }


    console.log(map);
    let newMap = Array.from(map.values());
    // console.log(newMap)

    // console.log(soretdArr);



    return newMap;
}