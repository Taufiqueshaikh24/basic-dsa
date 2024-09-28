




export const validAnagram = (str:string , str2:string):boolean => {
    // Solution 1 
    // let set1 = [...new Set(str)].sort().join('');
    // let  set2 = [...new Set(str2)].sort().join('');     
    // if(set1 !== set2){return false;}

    let freqcount1 = str.split('').reduce((acc:any , char:any) => {
                 acc[char]  =  (acc[char] || 0 ) + 1
                 return acc ; 
    },{})
    let freqcount2 = str2.split('').reduce((acc:any , char:any) => {
        acc[char]  =  (acc[char] || 0 ) + 1
        return acc ; 
},{})


console.log(freqcount1);
console.log(freqcount2);
        
    

    return  Object.keys(freqcount1).every((char) => freqcount1[char] === freqcount2[char]);
}




function validAnagramm(str:any, str2:any) {
  if (str.length !== str2.length) return false;

  let obj:any = {};
  
  for (let i = 0; i < str.length; i++) {
      let char = str[i];
      obj[char] = (obj[char] || 0) + 1;
  }
  
  for (let j = 0; j < str2.length; j++) {
      let char = str2[j];
      if (!obj[char]) {
          return false;
      } else {
          obj[char]--;
      }
  }
  
  return true;
}
