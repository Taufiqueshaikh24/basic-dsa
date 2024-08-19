




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