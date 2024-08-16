

export const reverseString = (str:string):string => {
//    this is one way of doing it 
    // return str.split('').reverse().join('');
    
    let emp = []
    for(let i = str.length - 1; i >=0 ; i-- ){
          emp.push(str[i])
        }
      let wors =   emp.join('');


return wors as string;
    
}